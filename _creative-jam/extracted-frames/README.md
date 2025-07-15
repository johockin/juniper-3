# Extracted Frames

This folder contains still frames extracted from the hero video for use in creative directions.

## Usage

1. **Extract frames**: Open `frame-extractor.html` in your browser
2. **Download frames**: Use the extractor to download frames as `frame-01.jpg` through `frame-12.jpg`
3. **Auto-placement**: Frames are automatically used in all creative directions

## Frame Assignment

Frames are randomly assigned to case studies across all 6 directions to create variety:

- **Direction 1**: Uses frames 1, 5, 9, 12
- **Direction 2**: Uses frames 2, 6, 10, 3
- **Direction 3**: Uses frames 3, 7, 11, 4
- **Direction 4**: Uses frames 4, 8, 12, 1
- **Direction 5**: Uses frames 5, 9, 1, 6
- **Direction 6**: Uses frames 6, 10, 2, 7

## Customization

If you want to exclude certain frames (e.g., "don't use frame-03.jpg, it's too similar to frame-04"), update the frame assignment logic in the creative direction files.

## Technical Details

- **Format**: JPEG images
- **Quality**: 90% compression
- **Dimensions**: Match video resolution
- **Extraction**: Every 2.5 seconds for 30-second video (12 frames total)