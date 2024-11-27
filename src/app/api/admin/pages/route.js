import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pagesDir = path.join(process.cwd(), 'src', 'Pages');
    
    // Read all files in the Pages directory
    const files = fs.readdirSync(pagesDir);
    
    // Filter for .jsx files and create page objects
    const pages = files
      .filter(file => file.endsWith('.jsx'))
      .map(file => {
        const filePath = path.join('src', 'Pages', file);
        const stats = fs.statSync(path.join(process.cwd(), filePath));
        
        return {
          name: file,
          path: filePath,
          size: stats.size,
          lastModified: stats.mtime.toISOString(),
        };
      })
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error reading pages:', error);
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
  }
}
