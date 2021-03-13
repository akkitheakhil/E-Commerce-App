import { model, Schema, Document } from 'mongoose';
import { TCategories } from "../types/categories.type";

const categorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subcategory: [{
    type: String,
    required: true,
  }],
});

const CategoryDbModal = model<TCategories & Document>('Categories', categorySchema);

export default CategoryDbModal;
