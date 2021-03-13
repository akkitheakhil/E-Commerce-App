import { model, Schema, Document } from 'mongoose';
import { TProduct } from '../types/products.type';

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

const ProductDbModal = model<TProduct & Document>('Products', productSchema);

export default ProductDbModal;
