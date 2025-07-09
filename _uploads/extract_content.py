#!/usr/bin/env python3
"""
Automated content extraction from Office files and PDFs
Extracts text, images, and metadata for website content processing
"""

import zipfile
import os
import sys
import xml.etree.ElementTree as ET
import re
from pathlib import Path
import shutil

def extract_docx_content(file_path):
    """Extract text and images from DOCX files"""
    content = {
        'text': [],
        'images': [],
        'metadata': {}
    }
    
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            # Extract text from document.xml
            try:
                doc_xml = zip_ref.read('word/document.xml')
                root = ET.fromstring(doc_xml)
                
                # Extract text content
                text_elements = []
                for elem in root.iter():
                    if elem.text:
                        text_elements.append(elem.text)
                
                content['text'] = text_elements
                
            except Exception as e:
                print(f"Error reading document.xml: {e}")
            
            # Extract images
            image_files = [f for f in zip_ref.namelist() if f.startswith('word/media/')]
            for img_file in image_files:
                try:
                    img_data = zip_ref.read(img_file)
                    img_name = os.path.basename(img_file)
                    content['images'].append({
                        'name': img_name,
                        'path': img_file,
                        'size': len(img_data)
                    })
                except Exception as e:
                    print(f"Error reading image {img_file}: {e}")
                    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return content

def extract_pptx_content(file_path):
    """Extract text and images from PPTX files"""
    content = {
        'slides': [],
        'images': [],
        'text': []
    }
    
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            # Get slide files
            slide_files = [f for f in zip_ref.namelist() if f.startswith('ppt/slides/slide')]
            
            for slide_file in slide_files:
                try:
                    slide_xml = zip_ref.read(slide_file)
                    root = ET.fromstring(slide_xml)
                    
                    slide_text = []
                    for elem in root.iter():
                        if elem.text:
                            slide_text.append(elem.text)
                    
                    content['slides'].append({
                        'file': slide_file,
                        'text': slide_text
                    })
                    content['text'].extend(slide_text)
                    
                except Exception as e:
                    print(f"Error reading slide {slide_file}: {e}")
            
            # Extract images
            image_files = [f for f in zip_ref.namelist() if f.startswith('ppt/media/')]
            for img_file in image_files:
                try:
                    img_data = zip_ref.read(img_file)
                    img_name = os.path.basename(img_file)
                    content['images'].append({
                        'name': img_name,
                        'path': img_file,
                        'size': len(img_data)
                    })
                except Exception as e:
                    print(f"Error reading image {img_file}: {e}")
                    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return content

def process_file(file_path):
    """Process a single file and extract content"""
    file_name = os.path.basename(file_path)
    file_ext = os.path.splitext(file_name)[1].lower()
    
    print(f"\n=== Processing {file_name} ===")
    
    if file_ext == '.docx':
        content = extract_docx_content(file_path)
        print(f"Found {len(content['text'])} text elements")
        print(f"Found {len(content['images'])} images")
        
        # Show first few text elements
        for i, text in enumerate(content['text'][:5]):
            if text.strip():
                print(f"  Text {i+1}: {text[:100]}...")
        
        # Show images
        for img in content['images']:
            print(f"  Image: {img['name']} ({img['size']} bytes)")
            
    elif file_ext == '.pptx':
        content = extract_pptx_content(file_path)
        print(f"Found {len(content['slides'])} slides")
        print(f"Found {len(content['images'])} images")
        
        # Show slide content
        for i, slide in enumerate(content['slides'][:3]):
            print(f"  Slide {i+1}: {len(slide['text'])} text elements")
            for j, text in enumerate(slide['text'][:3]):
                if text.strip():
                    print(f"    Text {j+1}: {text[:100]}...")
        
        # Show images
        for img in content['images']:
            print(f"  Image: {img['name']} ({img['size']} bytes)")
            
    elif file_ext == '.pdf':
        print("PDF processing would require additional libraries (PyPDF2, pdfplumber)")
        
    else:
        print(f"Unsupported file type: {file_ext}")

def main():
    """Main function to process all files"""
    current_dir = Path('.')
    
    # Find all Office files
    office_files = []
    for ext in ['*.docx', '*.pptx', '*.pdf']:
        office_files.extend(current_dir.glob(ext))
    
    print(f"Found {len(office_files)} Office files to process")
    
    for file_path in office_files:
        process_file(str(file_path))

if __name__ == "__main__":
    main()