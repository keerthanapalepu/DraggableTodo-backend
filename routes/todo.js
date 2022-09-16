import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todo.js';
// import auth from '../middleware/auth.js';
const router = express.Router();


router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
export default router;