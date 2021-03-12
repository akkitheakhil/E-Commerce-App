import { model, Schema, Document } from 'mongoose';
import { IProduct } from '../interfaces/products.interface';

const productSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
});

const productDbModal = model<IProduct & Document>('Products', productSchema);

export default productDbModal;
