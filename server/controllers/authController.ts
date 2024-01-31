import { Request, Response, NextFunction } from 'express';
import { User, validate, sequelize, UserModel } from '../models/user'
import bcrypt from 'bcrypt'
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken'


class UserController {
  constructor() {
  }

  middlewareAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header("x-access-token");
      if (!token) return res.status(403).send("Accès refusé.");

      const secret = process.env.JWTPRIVATEKEY;
      if (!secret) {
        throw new Error("La clé secrète JWT est manquante.");
      }

      const decoded = jwt.verify(token, secret) as UserModel;
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).send("Le token est invalide");
    }
  }

  // SIGN UP
  async SignUp(req: Request, res: Response) {
    const { body } = req
    const t = await sequelize.transaction()
    try {
      const { error } = validate(body)
      if (error) {
        t.rollback()
        return res.status(httpStatus.BAD_REQUEST).send(error.details[0].message)
      };
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      body.password = await bcrypt.hash(body.password, salt);
      const user = await User.create(body, { fields: ['firstName', 'lastName', 'email', 'password'], transaction: t });
      await t.commit();
      res.status(httpStatus.OK).json(user);
    } catch (err) {
      t.rollback();
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Une erreur est survenue : ' + err);
    }
  };

  // GET ME
  async GetMe(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findOne({
        where: { id: req.user!.id },
        attributes: { exclude: ['password'] }
      });
      if (!user) {
        res.status(httpStatus.NOT_FOUND).send()
      }
      res.status(httpStatus.OK).json(user);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Une erreur est survenue : ' + err);
    }
  };

}

const userController = new UserController();
export default userController;