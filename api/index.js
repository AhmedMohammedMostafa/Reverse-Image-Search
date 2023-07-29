import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import Images from './routes/images';
import SearchRoute from './routes/search';
import UploadRoute from './routes/upload';
import weaviate from 'weaviate-ts-client';

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));

// Routes
app.use('/api', Images);
app.use('/api', SearchRoute);
app.use('/api', UploadRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
