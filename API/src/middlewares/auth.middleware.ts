import { NextFunction, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import { RequestWithUser } from '../interfaces/auth.interface';
import admin from 'firebase-admin';


const serviceAccountCredentials: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}

const adminAccounts: string[] = JSON.parse(process.env.ADMIN_ACCOUNT_EMAILS);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccountCredentials),
});

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      const idToken = req.headers.authorization.split('Bearer ')[1];
      const validUser = await admin.auth().verifyIdToken(idToken);
      if (validUser) {
        if(!adminAccounts.includes(validUser.email)) next(new HttpException(403, 'Unauthorized User'));
        req.currentFirebaseUser = validUser;
      } else {
        next(new HttpException(401, 'Authentication failed'));
      }
    } else {
      next(new HttpException(403, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Authentication token missing'));
  }
};

export default authMiddleware;
