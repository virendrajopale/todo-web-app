import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, getTodos } from '../redux/action/todoAction'; 
export const NewTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState({
    task: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('task', todoText.task);

    try {
     await dispatch(createTodo(todoText));
    //  await dispatch(getTodos());
      setTodoText({ task: '' }); 
    } catch (err) {
      console.error('Error creating todo:', err);
    }
  };

  
   
  const handleDataChange = (e) => {
    setTodoText({
      ...todoText, 
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center flex-col sm:flex-row">
      <input
        type="text"
        value={todoText.task}
        name='task'
        onChange={(e)=>handleDataChange(e)}
        placeholder="Enter your todo..."
        className='border border-black w-full sm:w-80 h-10 pl-4 rounded-l-xl focus:outline-none mb-2 sm:mb-0 sm:mr-2 '
      />
      <button type="submit" className='border border-lime-700 h-10 px-4 rounded-r-xl bg-lime-500 text-white hover:bg-lime-600 transition duration-300 w-full sm:w-auto'>
        Add Todo
      </button>
    </form>
  );
}
