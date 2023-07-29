import express from 'express';
const router = express.Router();
import client from '../weaviate'; // Import the client module from weaviate.js

router.get('/images', async (req, res) => {
  try {
    // Perform the search query to get all images
    const resImages = await client.graphql.get()
      .withClassName('Images')
      .withFields(['image'])
      .do();

    // Extract the images from the response and create an array of base64 objects
    const imageArray = resImages.data.Get.Images.map((image) => image.image);

    res.status(200).json(imageArray);
  } catch (err) {
    console.error('Error getting images from Weaviate:', err);
    res.status(500).json({ error: 'Error getting images from Weaviate' });
  }
});

export default router;
