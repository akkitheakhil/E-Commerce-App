import { Router } from "express";
import Route from "../../types/routes.type";
import authMiddleware from "../../middlewares/auth.middleware";
import validationMiddleware from "../../middlewares/validation.middleware";
import ElectronicController from "../../controllers/electronics/electronics.controller";



class ElectronicsRoute implements Route {
  public path = '/api/products/electronic';
  public router = Router();
  public electronicController = new ElectronicController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all/:subcategoryname`, this.electronicController.getAllSubcatogeryItems);
    this.router.get(`${this.path}/:subcategoryname/:id`, this.electronicController.findSubcategoryItemById);
  }

}

export default ElectronicsRoute;
