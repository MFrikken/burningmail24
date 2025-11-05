import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
// Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }
    try {
        const { topic, keywords } = req.body;
        if (!topic || !keywords) {
            return res.status(400).json({ success: false, error: 'Missing topic or keywords' });
        }
        // Simulate subject line generation
        const generatedSubjects = [
            `Discover the Secrets of ${topic} with ${keywords[0]}`,
            `How ${keywords[1]} Can Transform Your ${topic} Experience`,
            `Top 10 Tips for Mastering ${topic} Using ${keywords[2]}`
        ];
        return res.status(200).json({ success: true, subjects: generatedSubjects });
    } catch (error) {
        console.error('Error generating subject lines:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
export default handler;