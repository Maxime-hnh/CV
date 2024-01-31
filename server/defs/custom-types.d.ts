import { Request } from 'express';
import { UserModel } from '../models/user';

declare module 'express' {
  export interface Request {
    user?: UserModel;
  }
}