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
      .map(file => ({
        name: file,
        path: path.join('src', 'Pages', file)
      }));

    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error reading pages:', error);
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
  }
}
