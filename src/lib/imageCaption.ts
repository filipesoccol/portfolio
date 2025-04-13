import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

interface ImageCaptionOptions {
  className?: string;
}

// This rehype plugin converts images to figures with captions
// and extracts float classes from the alt text
export function rehypeImageCaption(options: ImageCaptionOptions = {}) {
  const className = options.className || 'image-caption';
  
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      // Only process image nodes
      if (node.tagName !== 'img') return;
      
      // Get the alt text which we'll use for caption
      const alt = node.properties?.alt as string;
      if (!alt) return;

      // Check for float pattern in alt text: ![caption text](image.jpg){.float-right}
      let caption = alt;
      let floatClass = '';
      
      // Look for float-left or float-right in the alt text
      if (alt.includes('{.float-right}')) {
        caption = alt.replace('{.float-right}', '').trim();
        floatClass = 'float-right';
      } else if (alt.includes('{.float-left}')) {
        caption = alt.replace('{.float-left}', '').trim();
        floatClass = 'float-left'; // Fixed: Adding the float-left class
      }
      
      // Update the alt text to just be the clean caption
      node.properties.alt = caption;
      
      // Create a figure element with the appropriate class
      const figure: Element = {
        type: 'element',
        tagName: 'figure',
        properties: { 
          className: floatClass || undefined
        },
        children: [
          // Include the image (with updated alt text)
          {
            type: 'element',
            tagName: 'img',
            properties: { ...node.properties },
            children: []
          },
          // Add the caption
          {
            type: 'element',
            tagName: 'figcaption',
            properties: { className },
            children: [{ type: 'text', value: caption }]
          }
        ]
      };
      
      // Replace the image with our figure
      if (parent && typeof index === 'number') {
        parent.children[index] = figure;
      }
    });
  };
}