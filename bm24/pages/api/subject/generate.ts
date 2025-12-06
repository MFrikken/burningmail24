import type { NextApiRequest, NextApiResponse } from 'next';
import generateSubjects from '../../../backend/scripts/generate_subjects';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
// Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }
    try {
        const { mailbody, ...kwargs } = req.body;
        if (!mailbody) {
            return res.status(400).json({ success: false, error: 'Missing mailbody' });
        }
        // subject line generation 
        const generatedSubjects = await generateSubjects(mailbody, kwargs);
        return res.status(200).json({ success: true, subjects: generatedSubjects });
    } catch (error) {
        console.error('Error generating subject lines:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
export default handler;