
import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces/products.interface';
import ProductService from '../services/product.service';
import { Categories, Subcategories } from '../utils/categories.enum';

class ProductController {
  public productService = new ProductService();

  public allProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllProducts: IProduct[] = await this.productService.getAllProducts();
      res.status(200).json({ data: getAllProducts, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public findByCategory = async (req: Request, res: Response, next: NextFunction) => {
    const categoryName: Categories = req.params.id as Categories;
    try {
      const result: IProduct[] = await this.productService.findProductByCategory(categoryName);
      res.status(200).json({ data: result, message: 'findByCategory' });
    } catch (error) {
      next(error);
    }
  }

  public findBySubcategory = async (req: Request, res: Response, next: NextFunction) => {
    const categoryName: Subcategories = req.params.id as Subcategories;
    try {
      const result: IProduct[] = await this.productService.findProductBySubcategory(categoryName);
      res.status(200).json({ data: result, message: 'findBySubcategory' });
    } catch (error) {
      next(error);
    }
  }


}

export default ProductController;
