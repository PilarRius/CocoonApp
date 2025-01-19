import mongoose from 'mongoose';

const RoutineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  frequency: { type: String, required: true },
  resources: { type: Object, required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

export default mongoose.model('Routine', RoutineSchema);