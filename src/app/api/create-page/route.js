import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const { pageName, pageType } = await req.json();
    const pagesDir = path.join(process.cwd(), 'src', 'Pages');
    const filePath = path.join(pagesDir, `${pageName}${pageType}`);

    console.log('Request to create page with name:', pageName, 'and type:', pageType);
    console.log('Target directory:', pagesDir);
    console.log('Full file path:', filePath);

    // Create Pages directory if it doesn't exist
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true });
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(pageName)) {
      console.error('Invalid page name:', pageName);
      return NextResponse.json(
        { error: 'Invalid page name' },
        { status: 400 }
      );
    }

    // Create a basic page template
    const pageTemplate = `"use client";
import React from 'react';

export default function ${pageName}() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">${pageName}</h1>
      {/* Add your page content here */}
    </div>
  );
}
`;

    fs.writeFileSync(filePath, pageTemplate);
    
    return NextResponse.json(
      { message: 'Page created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { error: 'Failed to create page', details: error.message },
      { status: 500 }
    );
  }
}
