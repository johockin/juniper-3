#!/usr/bin/env python3
"""
Headless video frame extractor using OpenCV
Requires: pip install opencv-python
"""

import cv2
import os
import sys
from pathlib import Path

def extract_frames():
    print("🎬 Starting headless frame extraction...")
    
    # Paths
    script_dir = Path(__file__).parent
    video_path = script_dir / "../../public/videos/hero-video.mp4"
    output_dir = script_dir
    
    # Check if video exists
    if not video_path.exists():
        print(f"❌ Video file not found: {video_path}")
        return False
    
    try:
        # Open video
        cap = cv2.VideoCapture(str(video_path))
        
        if not cap.isOpened():
            print("❌ Could not open video file")
            return False
        
        # Get video properties
        fps = cap.get(cv2.CAP_PROP_FPS)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        duration = frame_count / fps
        
        print(f"📹 Video info: {duration:.1f}s, {fps:.1f} FPS, {frame_count} frames")
        
        # Extract 12 frames at regular intervals
        total_frames = 12
        interval = duration / (total_frames - 1)
        
        extracted_count = 0
        
        for i in range(total_frames):
            timestamp = i * interval
            frame_number = str(i + 1).zfill(2)
            
            # Seek to timestamp
            cap.set(cv2.CAP_PROP_POS_MSEC, timestamp * 1000)
            
            # Read frame
            ret, frame = cap.read()
            
            if ret:
                # Save frame
                output_path = output_dir / f"frame-{frame_number}.jpg"
                
                # Convert BGR to RGB for proper color
                frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                frame_bgr = cv2.cvtColor(frame_rgb, cv2.COLOR_RGB2BGR)
                
                # Save with high quality
                cv2.imwrite(str(output_path), frame_bgr, [cv2.IMWRITE_JPEG_QUALITY, 90])
                
                print(f"✅ Extracted frame-{frame_number}.jpg at {timestamp:.1f}s")
                extracted_count += 1
            else:
                print(f"❌ Failed to extract frame at {timestamp:.1f}s")
        
        cap.release()
        
        print(f"🎉 Frame extraction complete! Extracted {extracted_count}/{total_frames} frames")
        print(f"📁 Frames saved to: {output_dir}")
        
        # List extracted frames
        frames = sorted([f for f in os.listdir(output_dir) if f.startswith('frame-') and f.endswith('.jpg')])
        print(f"📸 Extracted frames: {frames}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error during extraction: {e}")
        return False

if __name__ == "__main__":
    success = extract_frames()
    sys.exit(0 if success else 1)