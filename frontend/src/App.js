
import { MdDarkMode, MdLightMode, MdSettings } from 'react-icons/md';
import { NewTodo } from './components/NewTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';



function App() {
 
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-4">
   
    <NewTodo/>
    <TodoList />
    
        </div>
  );
}

export default App;
