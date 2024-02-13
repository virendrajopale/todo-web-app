
import React, { useState } from 'react';
import UpdateTodoForm from './UpdateTodoForm';
import DeleteTodo from './DeleteTodo';
import { MdEdit } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
function TodoItem({ todo }) {
  const [updatebtn,setupdatebtn]= useState(false)

  return (
    <div className="flex justify-between gap-6 flex-col sm:flex-row sm:justify-center sm:items-center">
      <div className={`flex border ${todo.completed ? 'border-green-500' : 'border-red-500'} h-10 w-80 border rounded-2xl text-center justify-between items-center p-3`}>
  <p className=' text-center'>{todo.task}</p>
  <p>{todo.completed ? <IoCheckmarkDoneSharp/>: <ImCross/>}</p>
</div>

      <div className='flex items-center gap-7 justify-center'>
        <div>
        
        {
          updatebtn?<UpdateTodoForm todo={todo} setupdatebtn={setupdatebtn}/>:
          <button onClick={()=>setupdatebtn(true)} className='border border-blue-500 bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 ml-2'><MdEdit/></button>
        }
        </div>

        <DeleteTodo id={todo._id} />
      </div>
    </div>
  );
}

export default TodoItem;
