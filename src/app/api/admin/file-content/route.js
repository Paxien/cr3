import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { filePath } = await request.json();
    
    // Ensure the file path is within the Pages directory
    const fullPath = path.join(process.cwd(), filePath);
    const pagesDir = path.join(process.cwd(), 'src', 'Pages');
    
    if (!fullPath.startsWith(pagesDir)) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 403 }
      );
    }

    // Read the file content
    const content = fs.readFileSync(fullPath, 'utf-8');
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json(
      { error: 'Failed to read file content' },
      { status: 500 }
    );
  }
}
