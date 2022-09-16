import mongoose from 'mongoose';
const todoSchema = mongoose.Schema({
    creator: String,
    title: String,
    description: String,
    status: {
        type: String,
        default: "todos",
    },
}, { timestamps: true });

const TodosList = mongoose.model('TodosList', todoSchema);
export default TodosList;