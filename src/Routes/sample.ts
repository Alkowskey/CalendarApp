import express from 'express';
import controller from '../Controllers/sample';

const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);
router.get('/test', controller.sampleUserCheck);
router.get('/addUser', controller.addUser);
export = router;