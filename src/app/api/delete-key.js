import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const envPath = path.join(process.cwd(), '.env.local');

    try {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const updatedContent = envContent.replace(/NEXT_PUBLIC_USER_KEY=.*\n?/, '');
      fs.writeFileSync(envPath, updatedContent);
      res.status(200).json({ message: 'Key deleted successfully' });
    } catch (error) {
      console.error('Error deleting key from .env.local:', error);
      res.status(500).json({ error: 'Failed to delete key' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
