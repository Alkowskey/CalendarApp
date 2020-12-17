import http from 'http';
import express from 'express';
import bodyPareser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './Routes/sample';
import sample from './Controllers/sample';

const NAMESPACE = 'Server';
const router = express();

//Logging request

router.use((req, res, next)=>{
    logging.info(NAMESPACE, `METHOD = ${req.method}, URL = ${req.url},
        IP = ${req.socket.remoteAddress}`);
    res.on('finish', ()=>{
        logging.info(NAMESPACE, `METHOD = ${req.method}, URL = ${req.url},
            IP = ${req.socket.remoteAddress}, STATUS = ${req.statusCode}`);
    });

    next();
});
//Set up parser
router.use(bodyPareser.urlencoded({extended: false}));
router.use(bodyPareser.json());

router.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

//Routes

router.use('/sample', sampleRoutes);

//Errors
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });

});

//Set-up server

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, ()=>logging.info(NAMESPACE, `server running on 
    ${config.server.hostname}:${config.server.port}`));