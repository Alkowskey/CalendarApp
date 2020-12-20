import {Request, Response, NextFunction} from 'express';
import logging from '../config/logging';

import {User} from '../Models/User';

const NAMESPACE = 'Sample Controller'

const sampleHealthCheck = (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `Sample health check route called.`);

    return res.status(200).json({
        message:'pong'
    });
};

const addUser = async (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `Sample addUser route called.`);
    User.create({name: "Alek", color: "Red", birthday: "12-12-1999"});


    return res.status(200).json(await User.findAll());
};

const sampleUserCheck = (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `Sample user route called.`);

    return res.status(200).json({status: "it's fine dude, chill!"});
};

export default{sampleHealthCheck, sampleUserCheck, addUser};