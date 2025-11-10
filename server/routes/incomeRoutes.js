import express from 'express';
import {addIncome, getIncomes, deleteIncome} from '../controllers/incomeController.js';
import { protect } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/add', protect, addIncome);
router.get('/get', protect, getIncomes);
router.delete('/:id', protect, deleteIncome);

export default router;