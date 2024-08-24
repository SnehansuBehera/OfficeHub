import express from 'express';
import { createUser, login, logout, getUsers } from '../controllers/userControllers.js';
const router = express.Router();

router.route('/signup').post(createUser);
router.route('/login').post(login);
router.route('/logout').post(logout);
// router.get('/checkAuth', checkAuth);
router.get('/getUsers', getUsers); // New route to fetch users



export default router;