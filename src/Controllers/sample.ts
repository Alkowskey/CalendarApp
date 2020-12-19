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

const sampleUserCheck = (req: Request, res: Response, next:NextFunction)=>{
    logging.info(NAMESPACE, `Sample user route called.`);

    return res.status(200).json(new User(1, 'Alek', 'Red'));
};

export default{sampleHealthCheck, sampleUserCheck};