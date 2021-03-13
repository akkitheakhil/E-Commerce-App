import 'dotenv/config';
import App from './app';
import Routes from './types/routes.type';

import IndexRoute from './routes/index.route';
import LaptopRoute from './routes/electronics/laptop.route';
import LaptopAdminRoute from './routes/electronics/laptop.admin.route';
import ProductsRoute from './routes/products.route';
import validateEnv from './utils/validateEnv';
import ElectronicsRoute from './routes/electronics/electronic.route';
import ElectronicsAdminRoute from './routes/electronics/electronicAdmin.route';

validateEnv();

const routes: Routes[] = [
  new IndexRoute(),
  new ProductsRoute(),
  new ElectronicsRoute()
]

const adminRoutes:  Routes[] = [
  new ElectronicsAdminRoute()
]

const app = new App([...routes, ...adminRoutes]);

app.listen();
