import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    MONGO_HOST: str(),
    MONGO_PORT: str(),
    MONGO_DATABASE: str(),
    FIREBASE_PROJECT_ID: str(),
    FIREBASE_PRIVATE_KEY: str(),
    FIREBASE_CLIENT_EMAIL: str()
  });
};

export default validateEnv;
