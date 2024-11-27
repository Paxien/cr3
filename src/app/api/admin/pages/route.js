import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Recursive function to get all files
function getAllFiles(dirPath, arrayOfFiles = [], basePath = '') {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(basePath, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, relativePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const stats = fs.statSync(fullPath);
      
      arrayOfFiles.push({
        name: file,
        path: relativePath.replace(/\\/g, '/'), // Normalize path separators
        size: stats.size,
        lastModified: stats.mtime.toISOString(),
        isDirectory: false
      });
    }
  });

  return arrayOfFiles;
}

export async function GET() {
  try {
    // Look in src/Pages directory
    const pagesDir = path.join(process.cwd(), 'src', 'Pages');
    console.log('Pages directory:', pagesDir);
    
    if (!fs.existsSync(pagesDir)) {
      console.error('Pages directory not found:', pagesDir);
      return NextResponse.json({ error: 'Pages directory not found' }, { status: 404 });
    }
    
    const pages = getAllFiles(pagesDir);
    console.log('Found pages:', pages);
    
    // Sort pages by path for consistent ordering
    pages.sort((a, b) => a.path.localeCompare(b.path));
    
    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error reading pages:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
