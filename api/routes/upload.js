import express from 'express';
const router = express.Router();
import client from '../weaviate'; // Import the client module from weaviate.js

// Function to upload file
router.post('/upload', async (req, res) => {
  try {
    const { b64, name } = req.body;
    await client.data.creator()
      .withClassName('Images')
      .withProperties({
        image: b64,
        text: name
      })
      .do();

    res.json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).json({ error: 'Error uploading file' });
  }
});

export default router;
