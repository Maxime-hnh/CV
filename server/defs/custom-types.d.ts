import { Request } from 'express';
import { UserModel } from '../models/user'; // Assurez-vous que ce chemin est correct

declare module 'express' {
  interface Request {
    user?: UserModel | null;
  }
}