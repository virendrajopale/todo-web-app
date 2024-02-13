
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletetodo, getTodos } from '../redux/action/todoAction';
import { MdDelete } from "react-icons/md";

function DeleteTodo({ id }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await dispatch(deletetodo({id}));
      await dispatch(getTodos());
    } catch (error) {
      console.error('Error deleting todo:', error);

    }
  };

  return (
    
    <button className='border border-red-500 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition duration-300 ml-2' onClick={handleDelete}><MdDelete/></button>
  );
}

export default DeleteTodo;
