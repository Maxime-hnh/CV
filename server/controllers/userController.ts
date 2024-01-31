import { Request, Response, NextFunction } from 'express';
const { User, validate, sequelize } = require('../models/user');
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');



class UserController {
    constructor() {
    }


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