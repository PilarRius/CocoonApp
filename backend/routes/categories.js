import express from 'express';
import mongoose from 'mongoose';
import Category from '../models/Category.js';
import Routine from '../models/Routine.js';

const router = express.Router();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get routines by category
router.get('/:categoryId/routines', async (req, res) => {
  try {
    const categoryId = new mongoose.Types.ObjectId(req.params.categoryId); // Correct usage of ObjectId
    const routines = await Routine.find({ category_id: categoryId });
    res.json(routines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;