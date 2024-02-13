const express=require('express')

const { createToDo, deleteTodo, getAllTodos, updateTodo } =require( '../Controllers/ToDoController');
const toDoRouter=express.Router();

toDoRouter.route('/new').post(createToDo);
toDoRouter.route('/all/todo').get(getAllTodos);
toDoRouter.route('/updatetodo/:id').put(updateTodo);
toDoRouter.route('/deletetodo/:id').delete(deleteTodo);

module.exports= toDoRouter;