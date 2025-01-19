import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  routines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Routine' }]
});

export default mongoose.model('Category', CategorySchema);