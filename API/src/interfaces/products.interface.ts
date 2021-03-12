import { Categories, Subcategories } from "../utils/categories.enum";

export interface IProduct {
  _id: string;
  title: string;
  price: number;
  description?: string;
  category: Categories;
  subcategory: Subcategories;
  image?: string;
}
