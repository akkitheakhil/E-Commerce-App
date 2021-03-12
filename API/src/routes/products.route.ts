import Route from '../interfaces/routes.interface';
import { Router } from 'express';
import ProductController from '../controllers/products.controller';

class ProductsRoute implements Route {
  public path = '/api/products';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.productController.allProducts);
    this.router.get(`${this.path}/category/:id`, this.productController.findByCategory);
    this.router.get(`${this.path}/subcategory/:id`, this.productController.findBySubcategory);
  }

}

export default ProductsRoute;
