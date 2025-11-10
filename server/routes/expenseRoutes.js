import express from 'express';
import {addExpense, getExpenses, deleteExpense} from '../controllers/expenseController.js';
import { protect } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/add', protect, addExpense);
router.get('/get', protect, getExpenses);
router.delete('/:id', protect, deleteExpense);

export default router;