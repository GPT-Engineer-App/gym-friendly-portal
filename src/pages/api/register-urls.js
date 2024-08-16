import { registerC2BUrls } from '../../utils/mpesa';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await registerC2BUrls();
      res.status(200).json(result);
    } catch (error) {
      console.error('Error in registerC2BUrls:', error);
      res.status(500).json({ error: 'Failed to register URLs' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}