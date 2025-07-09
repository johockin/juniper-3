#!/usr/bin/env python3
"""
Extract readable content from RTF file
"""

import re
from pathlib import Path

def extract_rtf_content(rtf_file_path):
    """Extract readable text from RTF file"""
    try:
        with open(rtf_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove RTF formatting codes
        # Keep only text between } and {, and clean up
        text_content = []
        
        # Split by lines and process
        lines = content.split('\n')
        for line in lines:
            # Remove RTF codes but keep actual text
            if line.strip():
                # Remove color codes, font codes, etc.
                clean_line = re.sub(r'\\[a-zA-Z0-9]+\d*\s*', '', line)
                clean_line = re.sub(r'\\[^a-zA-Z0-9\s]', '', clean_line)
                clean_line = re.sub(r'\{[^}]*\}', '', clean_line)
                clean_line = re.sub(r'[{}]', '', clean_line)
                clean_line = clean_line.strip()
                
                if clean_line and len(clean_line) > 3:
                    text_content.append(clean_line)
        
        return text_content
    
    except Exception as e:
        print(f"Error reading RTF file: {e}")
        return []

def main():
    rtf_path = Path("current website content (rough paste).rtfd/TXT.rtf")
    
    if rtf_path.exists():
        print(f"Extracting content from {rtf_path}...")
        content = extract_rtf_content(rtf_path)
        
        # Save cleaned content
        output_path = Path("extracted/current_website_content.txt")
        output_path.parent.mkdir(exist_ok=True)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("EXTRACTED FROM: current website content (rough paste)\n")
            f.write("=" * 60 + "\n\n")
            
            for i, line in enumerate(content):
                f.write(f"[{i+1:03d}] {line}\n")
        
        print(f"✅ Extracted {len(content)} lines of content")
        print(f"📄 Saved to: {output_path}")
        
        # Show first few lines
        print("\nFirst 10 lines:")
        for i, line in enumerate(content[:10]):
            print(f"  {i+1}: {line[:100]}...")
    
    else:
        print(f"RTF file not found: {rtf_path}")

if __name__ == "__main__":
    main()