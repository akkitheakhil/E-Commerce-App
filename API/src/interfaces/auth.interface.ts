import { Request } from 'express';
import admin from 'firebase-admin';

export interface RequestWithUser extends Request {
  currentFirebaseUser: admin.auth.DecodedIdToken;
}
