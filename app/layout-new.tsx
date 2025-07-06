import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juniper Island - Video Production & Brand Storytelling',
  description: 'Toronto-based video production and brand storytelling agency. We craft compelling brand stories through video and creative content.',
  keywords: 'video production, brand storytelling, Toronto, creative agency, marketing video',
  authors: [{ name: 'Juniper Island' }],
  creator: 'Juniper Island',
  publisher: 'Juniper Island',
  openGraph: {
    title: 'Juniper Island - Video Production & Brand Storytelling',
    description: 'We craft compelling brand stories through video and creative content',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Juniper Island',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juniper Island - Video Production & Brand Storytelling',
    description: 'We craft compelling brand stories through video and creative content',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}