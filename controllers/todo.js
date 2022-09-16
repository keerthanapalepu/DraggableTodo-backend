import TodosList from '../models/todo.js';
import mongoose from 'mongoose';


export const getTodos = async(req, res) => {
    try {
        const todosList = await TodosList.find();
        const tasks = {
            todos: [],
            inProgress: [],
            completed: [],
        };

        todosList.forEach((task) => {
            tasks[task.status].push(task);
        });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTodo = async(req, res) => {
    try {
        const newTodo = await TodosList(req.body);
        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (e) {
        res.status(500).send(e);
    }
}


export const updateTodo = async(req, res) => {
    try {
        const todo = await TodosList.findById(req.params.id);
        if (!todo) return res.status(404).json("No such todo");
        await todo.updateOne({ $set: req.body });
        res.status(200).json("Sucessfully updated");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}


export const deleteTodo = async(req, res) => {
    try {
        const todo = await TodosList.findById(req.params.id);
        if (!todo) return res.status(404).json("No such todo");
        await todo.deleteOne();
        res.status(200).json("Sucessfully deleted");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}