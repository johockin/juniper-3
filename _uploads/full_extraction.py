#!/usr/bin/env python3
"""
Full content extraction and organization script
Extracts text, images, and creates organized folders
"""

import zipfile
import os
import xml.etree.ElementTree as ET
from pathlib import Path
import shutil
import json

def clean_text(text):
    """Clean extracted text"""
    if not text:
        return ""
    return text.strip().replace('\n', ' ').replace('\r', ' ')

def extract_and_save_docx(file_path, output_dir):
    """Extract and save DOCX content"""
    output_folder = output_dir / file_path.stem
    output_folder.mkdir(exist_ok=True)
    
    content = {
        'filename': file_path.name,
        'type': 'docx',
        'text_content': [],
        'images': []
    }
    
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            # Extract text
            try:
                doc_xml = zip_ref.read('word/document.xml')
                root = ET.fromstring(doc_xml)
                
                # Extract paragraphs and text
                for paragraph in root.iter():
                    if paragraph.text:
                        clean_text_content = clean_text(paragraph.text)
                        if clean_text_content and len(clean_text_content) > 3:
                            content['text_content'].append(clean_text_content)
                
                # Save text content
                text_file = output_folder / f"{file_path.stem}_text.txt"
                with open(text_file, 'w', encoding='utf-8') as f:
                    f.write(f"EXTRACTED FROM: {file_path.name}\n")
                    f.write("=" * 50 + "\n\n")
                    for i, text in enumerate(content['text_content']):
                        f.write(f"[{i+1}] {text}\n\n")
                
            except Exception as e:
                print(f"Error reading document.xml from {file_path}: {e}")
            
            # Extract images
            image_files = [f for f in zip_ref.namelist() if f.startswith('word/media/')]
            images_folder = output_folder / "images"
            images_folder.mkdir(exist_ok=True)
            
            for img_file in image_files:
                try:
                    img_data = zip_ref.read(img_file)
                    img_name = os.path.basename(img_file)
                    
                    # Save image
                    with open(images_folder / img_name, 'wb') as f:
                        f.write(img_data)
                    
                    content['images'].append({
                        'name': img_name,
                        'size': len(img_data),
                        'path': f"images/{img_name}"
                    })
                    
                except Exception as e:
                    print(f"Error extracting image {img_file}: {e}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    # Save metadata
    metadata_file = output_folder / "metadata.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(content, f, indent=2, ensure_ascii=False)
    
    return content

def extract_and_save_pptx(file_path, output_dir):
    """Extract and save PPTX content"""
    output_folder = output_dir / file_path.stem
    output_folder.mkdir(exist_ok=True)
    
    content = {
        'filename': file_path.name,
        'type': 'pptx',
        'slides': [],
        'images': []
    }
    
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            # Get slide files
            slide_files = sorted([f for f in zip_ref.namelist() if f.startswith('ppt/slides/slide')])
            
            for i, slide_file in enumerate(slide_files):
                try:
                    slide_xml = zip_ref.read(slide_file)
                    root = ET.fromstring(slide_xml)
                    
                    slide_text = []
                    for elem in root.iter():
                        if elem.text:
                            clean_text_content = clean_text(elem.text)
                            if clean_text_content and len(clean_text_content) > 2:
                                slide_text.append(clean_text_content)
                    
                    slide_content = {
                        'slide_number': i + 1,
                        'file': slide_file,
                        'text': slide_text
                    }
                    
                    content['slides'].append(slide_content)
                    
                except Exception as e:
                    print(f"Error reading slide {slide_file}: {e}")
            
            # Save slides text
            slides_file = output_folder / f"{file_path.stem}_slides.txt"
            with open(slides_file, 'w', encoding='utf-8') as f:
                f.write(f"EXTRACTED FROM: {file_path.name}\n")
                f.write("=" * 50 + "\n\n")
                for slide in content['slides']:
                    f.write(f"SLIDE {slide['slide_number']}\n")
                    f.write("-" * 20 + "\n")
                    for text in slide['text']:
                        f.write(f"{text}\n")
                    f.write("\n")
            
            # Extract images
            image_files = [f for f in zip_ref.namelist() if f.startswith('ppt/media/')]
            images_folder = output_folder / "images"
            images_folder.mkdir(exist_ok=True)
            
            for img_file in image_files:
                try:
                    img_data = zip_ref.read(img_file)
                    img_name = os.path.basename(img_file)
                    
                    # Save image
                    with open(images_folder / img_name, 'wb') as f:
                        f.write(img_data)
                    
                    content['images'].append({
                        'name': img_name,
                        'size': len(img_data),
                        'path': f"images/{img_name}"
                    })
                    
                except Exception as e:
                    print(f"Error extracting image {img_file}: {e}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    # Save metadata
    metadata_file = output_folder / "metadata.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(content, f, indent=2, ensure_ascii=False)
    
    return content

def main():
    """Main extraction function"""
    current_dir = Path('.')
    extracted_dir = current_dir / "extracted"
    extracted_dir.mkdir(exist_ok=True)
    
    # Process all Office files
    office_files = []
    for ext in ['*.docx', '*.pptx']:
        office_files.extend(current_dir.glob(ext))
    
    print(f"Starting full extraction of {len(office_files)} files...")
    
    all_content = []
    
    for file_path in office_files:
        print(f"\nExtracting: {file_path.name}")
        
        if file_path.suffix.lower() == '.docx':
            content = extract_and_save_docx(file_path, extracted_dir)
        elif file_path.suffix.lower() == '.pptx':
            content = extract_and_save_pptx(file_path, extracted_dir)
        
        all_content.append(content)
        print(f"  ✓ Extracted {len(content.get('text_content', content.get('slides', [])))} text elements")
        print(f"  ✓ Extracted {len(content['images'])} images")
    
    # Create summary
    summary_file = extracted_dir / "extraction_summary.json"
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(all_content, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Extraction complete! Check the 'extracted' folder.")
    print(f"📁 Created {len(office_files)} content folders")
    print(f"📄 Summary saved to: {summary_file}")

if __name__ == "__main__":
    main()