import { Router } from 'express';

interface TRoute {
  path?: string;
  router: Router;
}

export default TRoute;
