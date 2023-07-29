import express from 'express';
const router = express.Router();
import client from '../weaviate'; // Import the client module from weaviate.js

router.post('/search', async (req, res) => {
  try {
    const { base64 } = req.body;

    // Perform the search query using Weaviate
    const resImages = await client.graphql.get()
      .withClassName('Images') // Change the className to match the schema in Weaviate
      .withFields(['image'])
      .withNearImage({ image: base64 })
      .do();

    // Extract the result images from the response
    const result = resImages.data.Get.Meme.map((item) => item.image);

    res.status(200).json({ b64: result });
  } catch (err) {
    console.error('Error searching in Weaviate:', err);
    res.status(500).json({ error: 'Error searching in Weaviate' });
  }
});

export default router;
