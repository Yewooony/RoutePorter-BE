import { callChatGPT } from './chatgpt.js';

export async function getTravelRouteHandler(req, res) {
   const { purpose, duration, budget, climate, activities, transport, companion, favorite, specialNeeds, preferredCountries, recommendationType } = req.query;

   if (!purpose || !duration || !budget || !climate || !activities || !transport || !companion || !favorite || !specialNeeds || !preferredCountries || !recommendationType) {
      return res.status(400).json({ message: 'All query parameters are required' });
   }

   const answers = {
      purpose,
      duration,
      budget,
      climate,
      activities,
      transport,
      companion,
      favorite,
      specialNeeds,
      preferredCountries,
      recommendationType
   };

   try {
      const route = await callChatGPT(answers);
      res.json({ route });
   } catch (error) {
      res.status(500).json({ message: 'Failed to fetch travel route' });
   }
}
