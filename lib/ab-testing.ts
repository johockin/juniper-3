// A/B Testing System for Headlines and Content
export interface ABTestVariant {
  id: string;
  name: string;
  weight: number; // 0-100, weight for this variant
}

export interface ABTest {
  id: string;
  name: string;
  enabled: boolean;
  variants: ABTestVariant[];
  startDate?: string;
  endDate?: string;
}

export interface ABTestResult {
  testId: string;
  variantId: string;
  userId: string;
  timestamp: number;
}

// Storage keys
const AB_TEST_STORAGE_KEY = 'juniper_ab_tests';
const AB_TEST_USER_ID_KEY = 'juniper_ab_user_id';

// Generate a unique user ID for consistent bucketing
function generateUserId(): string {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Get or create user ID
export function getUserId(): string {
  if (typeof window === 'undefined') return 'ssr_user';
  
  let userId = localStorage.getItem(AB_TEST_USER_ID_KEY);
  if (!userId) {
    userId = generateUserId();
    localStorage.setItem(AB_TEST_USER_ID_KEY, userId);
  }
  return userId;
}

// Hash function for consistent bucketing
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Get user's variant for a specific test
export function getUserVariant(test: ABTest): ABTestVariant {
  if (!test.enabled || test.variants.length === 0) {
    return test.variants[0] || { id: 'default', name: 'Default', weight: 100 };
  }

  const userId = getUserId();
  const hash = hashString(userId + test.id);
  const bucketValue = hash % 100;

  let cumulativeWeight = 0;
  for (const variant of test.variants) {
    cumulativeWeight += variant.weight;
    if (bucketValue < cumulativeWeight) {
      return variant;
    }
  }

  // Fallback to first variant
  return test.variants[0];
}

// Track user's assignment to a variant
export function trackVariantAssignment(test: ABTest, variant: ABTestVariant): void {
  if (typeof window === 'undefined') return;

  const userId = getUserId();
  const assignment: ABTestResult = {
    testId: test.id,
    variantId: variant.id,
    userId,
    timestamp: Date.now(),
  };

  // Store in localStorage for persistence
  const existingAssignments = JSON.parse(
    localStorage.getItem(AB_TEST_STORAGE_KEY) || '[]'
  );
  
  // Check if user already has assignment for this test
  const existingIndex = existingAssignments.findIndex(
    (a: ABTestResult) => a.testId === test.id && a.userId === userId
  );

  if (existingIndex >= 0) {
    existingAssignments[existingIndex] = assignment;
  } else {
    existingAssignments.push(assignment);
  }

  localStorage.setItem(AB_TEST_STORAGE_KEY, JSON.stringify(existingAssignments));

  // Send to analytics if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', 'ab_test_assignment', {
      test_id: test.id,
      variant_id: variant.id,
      user_id: userId,
    });
  }
}

// Track conversion events
export function trackConversion(eventName: string, testId?: string): void {
  if (typeof window === 'undefined') return;

  const userId = getUserId();
  
  // Get user's current test assignments
  const assignments = JSON.parse(
    localStorage.getItem(AB_TEST_STORAGE_KEY) || '[]'
  );

  // Track conversion for all active tests or specific test
  const relevantAssignments = testId 
    ? assignments.filter((a: ABTestResult) => a.testId === testId)
    : assignments;

  relevantAssignments.forEach((assignment: ABTestResult) => {
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag('event', 'ab_test_conversion', {
        test_id: assignment.testId,
        variant_id: assignment.variantId,
        user_id: userId,
        event_name: eventName,
      });
    }
  });

  // Generic conversion tracking
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', eventName, {
      user_id: userId,
    });
  }
}

// Get user's current test assignments
export function getUserAssignments(): ABTestResult[] {
  if (typeof window === 'undefined') return [];
  
  return JSON.parse(localStorage.getItem(AB_TEST_STORAGE_KEY) || '[]');
}

// Clear all test data (for testing purposes)
export function clearABTestData(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(AB_TEST_STORAGE_KEY);
  localStorage.removeItem(AB_TEST_USER_ID_KEY);
}