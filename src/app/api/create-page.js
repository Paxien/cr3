import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { pageName, pageType } = req.body;
    const pagesDir = path.join(process.cwd(), 'src', 'Pages');
    const filePath = path.join(pagesDir, `${pageName}${pageType}`);

    console.log('Request to create page with name:', pageName, 'and type:', pageType);
    console.log('Target directory:', pagesDir);
    console.log('Full file path:', filePath);

    if (!/^[a-zA-Z0-9_-]+$/.test(pageName)) {
      console.error('Invalid page name:', pageName);
      return res.status(400).json({ error: 'Invalid page name' });
    }

    try {
      fs.writeFileSync(filePath, `// ${pageName} page content`);
      res.status(200).json({ message: 'Page created successfully' });
    } catch (error) {
      console.error('Error creating page:', error);
      res.status(500).json({ error: 'Failed to create page', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
