import User from '../models/User.js';
import Income from '../models/Income.js';

export const addIncome = async (req, res) => {
    const userId = req.user.id;
    
    try{
        const {icon, source, amount, date} = req.body;

        if(!source || !amount || !date){
            return res.status(400).json({message: "All fields are required"});
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();

        res.status(200).json(newIncome);
    } catch (error){
        res.status(500).json({message: `${error}`});
    }
}

export const getIncomes = async (req, res) => {
    const userId = req.user.id;

    try{
        const income = await Income.find({userId}).sort({date:-1});
        res.json(income);
    } catch (error) {
        res.status(500).json({message: `${error}`})
    }
}

export const deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "Income Deleted Successfully"});
    } catch (error) {
        res.json(500).json({message : `${error}`});
    }
}