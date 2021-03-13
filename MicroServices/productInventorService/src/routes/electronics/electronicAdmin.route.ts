import { Router } from "express";
import Route from "../../types/routes.type";
import authMiddleware from "../../middlewares/auth.middleware";
import validationMiddleware from "../../middlewares/validation.middleware";
import ElectronicController from "../../controllers/electronics/electronics.controller";



class ElectronicsAdminRoute implements Route {
  public path = '/admin/products/electronic';
  public router = Router();
  public electronicController = new ElectronicController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/:subcategoryname`, this.electronicController.addSubcategoryItem);
    this.router.delete(`${this.path}/:subcategoryname/:id`, authMiddleware, this.electronicController.deleteSubcategoryItemById);
  }

}

export default ElectronicsAdminRoute;
