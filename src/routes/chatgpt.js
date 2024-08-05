import express from 'express';
import { callChatGPT } from '../controllers/chatgpt.js'
const router = express.Router();



router.get('/ask', (req, res) => {
    res.render('askgpt', {
        pass: true,
        response: null,
        error: null
    });
});

router.post('/ask', async (req, res) => {
    const answers = {
        purpose: req.body.purpose,
        duration: req.body.duration,
        budget: req.body.budget,
        climate: req.body.climate,
        activities: req.body.activities,
        transport: req.body.transport,
        companion: req.body.companion,
        favorite: req.body.favorite,
        specialNeeds: req.body.specialNeeds,
        preferredCountries: req.body.preferredCountries,
        recommendationType: req.body.recommendationType
    };

    try {
        const response = await callChatGPT(answers);
        res.render('askgpt', {
            pass: true,
            response: response,
            error: null
        });
    } catch (error) {
        res.render('askgpt', {
            pass: true,
            response: null,
            error: 'Failed to get response from ChatGPT API'
        });
    }
});

export default router;
