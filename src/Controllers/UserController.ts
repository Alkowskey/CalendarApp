import {Request, Response, NextFunction} from 'express';
import { Room } from '../Models/Room';
import logging from '../config/logging';

import {User} from '../Models/User';

const NAMESPACE = 'USER Controller'

const addUser = (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `addUser route called.`);
    const user = new User(req.body);
    user.save();


    return res.status(200).json(user);
};

const removeUser = async (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `removeUser route called.`);
    const user = await User.findOne({where: {name: req.body.name}});
    if(user){
        await user.destroy();
        return res.status(200).json({status: "user removed"});
    }


    return res.status(200).json({status: "user has not been removed"});
};

const updateUser = async (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `updateUser route called.`);
    const user = await User.findOne({where: {name: req.body.name}});
    const body = req.body;
    if(body.newName)
        user.name = body.newName;
    if(body.color)
        user.color = body.color;
    if(body.birthday)
        user.birthday = body.birthday;

    user.save();

    return res.status(200).json(user);
}

const getAllUsers = async(req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `getAllUsers route called.`);

    return res.status(200).json(await User.findAll({include: [Room]}));
};



export default{addUser, getAllUsers, removeUser, updateUser};