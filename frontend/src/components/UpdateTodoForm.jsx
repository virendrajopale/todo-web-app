import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos, updateTodo } from '../redux/action/todoAction';
import { FiEdit2 } from "react-icons/fi";

function UpdateTodoForm({ todo, setupdatebtn }) {
  const dispatch = useDispatch();
  const [updata, setUpdata] = useState({
    task: todo.task,
    completed: todo.completed
  });
  const id = todo._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateTodo({ id, updata }));
      await dispatch(getTodos());
      setupdatebtn(false);
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const handelInpData = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setUpdata(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center ">
     
      <label className="ml-4 flex items-center text-gray-700">
        <input
          type="checkbox"
          name='completed'
          checked={updata.completed}
          onChange={handelInpData}
          className="mr-2 h-6 w-6" 
        />
        
      </label>
      <button type="submit" className="border border-blue-500 bg-blue-500 text-white py-2 px-4 rounded-r-xl hover:bg-blue-600 transition duration-300 ml-2">
        <FiEdit2 />
      </button>
    </form>
  );
}

export default UpdateTodoForm;
