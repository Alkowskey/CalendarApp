import express from 'express';
import controller from '../Controllers/UserController';

const router = express.Router();

router.post('/', controller.addUser);
router.get('/', controller.getAllUsers);
router.delete('/', controller.removeUser);
router.put('/', controller.updateUser);
export = router;