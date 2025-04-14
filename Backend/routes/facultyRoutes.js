import express from 'express';
import { registerFaculty, loginFaculty, getLoggedInFaculty } from '../controllers/facultyController.js';
import { protectFaculty } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/faculty/register
router.post('/register', registerFaculty);

router.post('/login', loginFaculty);
router.get('/me', protectFaculty, getLoggedInFaculty);

export default router;