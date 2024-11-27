import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { key } = req.body;
    const envPath = path.join(process.cwd(), '.env.local');

    try {
      fs.appendFileSync(envPath, `\nNEXT_PUBLIC_USER_KEY=${key}`);
      res.status(200).json({ message: 'Key updated successfully' });
    } catch (error) {
      console.error('Error updating .env.local:', error);
      res.status(500).json({ error: 'Failed to update key' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
