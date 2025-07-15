const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// Install canvas with: npm install canvas
// Run with: node headless-extractor.js

async function extractFramesFromVideo() {
  console.log('🎬 Starting headless frame extraction...');
  
  const videoPath = path.join(__dirname, '../../public/videos/hero-video.mp4');
  const outputDir = __dirname;
  
  // Check if video exists
  if (!fs.existsSync(videoPath)) {
    console.error('❌ Video file not found:', videoPath);
    return;
  }
  
  try {
    // Use ffmpeg to extract frames
    const { execSync } = require('child_process');
    
    // Check if ffmpeg is installed
    try {
      execSync('ffmpeg -version', { stdio: 'ignore' });
    } catch (error) {
      console.error('❌ ffmpeg not found. Please install ffmpeg:');
      console.error('   macOS: brew install ffmpeg');
      console.error('   Linux: sudo apt-get install ffmpeg');
      return;
    }
    
    // Get video duration first
    const durationCommand = `ffprobe -v quiet -show_entries format=duration -of csv=p=0 "${videoPath}"`;
    const durationStr = execSync(durationCommand, { encoding: 'utf8' }).trim();
    const duration = parseFloat(durationStr);
    
    console.log(`📹 Video duration: ${duration.toFixed(1)} seconds`);
    
    // Extract 12 frames at regular intervals
    const totalFrames = 12;
    const interval = duration / (totalFrames - 1);
    
    for (let i = 0; i < totalFrames; i++) {
      const timestamp = i * interval;
      const frameNumber = String(i + 1).padStart(2, '0');
      const outputPath = path.join(outputDir, `frame-${frameNumber}.jpg`);
      
      // Extract frame at specific timestamp
      const command = `ffmpeg -i "${videoPath}" -ss ${timestamp} -vframes 1 -q:v 2 "${outputPath}" -y`;
      
      try {
        execSync(command, { stdio: 'ignore' });
        console.log(`✅ Extracted frame-${frameNumber}.jpg at ${timestamp.toFixed(1)}s`);
      } catch (error) {
        console.error(`❌ Failed to extract frame ${frameNumber}:`, error.message);
      }
    }
    
    console.log('🎉 Frame extraction complete!');
    console.log('📁 Frames saved to:', outputDir);
    
    // List extracted frames
    const frames = fs.readdirSync(outputDir).filter(f => f.startsWith('frame-') && f.endsWith('.jpg'));
    console.log('📸 Extracted frames:', frames.sort());
    
  } catch (error) {
    console.error('❌ Error during extraction:', error.message);
  }
}

// Run the extraction
extractFramesFromVideo();