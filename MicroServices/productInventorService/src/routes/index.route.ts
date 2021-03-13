import { Router } from 'express';
import IndexController from '../controllers/index.controller';
import TRoute from '../types/routes.type';

class IndexRoute implements TRoute {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
