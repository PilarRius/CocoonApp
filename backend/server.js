import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/categories.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Comment out MongoDB connection for now
 mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));