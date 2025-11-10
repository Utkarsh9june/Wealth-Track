import User from '../models/User.js';
import Expense from '../models/Expense.js';
import Income from '../models/Income.js';

export const addExpense = async (req,res) => {
    const userId = req.user.id;
    try {
        const {icon, category, amount, date} = req.body;

        if(!category || !amount || !date){
            return res.status(400).json({message: "All fields are required"});
        }

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date : new Date(date)
        });

        await newExpense.save();
        res.status(200).json({newExpense});
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}

export const getExpenses = async (req,res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({userId}).sort({date: -1});
        res.json({expense});
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}

export const deleteExpense = async (req,res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json("Expense Deleted Successfully");
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}