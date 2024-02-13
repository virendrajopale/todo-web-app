

import { useState } from 'react';
import { NewTodo } from './components/NewTodo';
import TodoList from './components/TodoList';
import { MdDarkMode, MdLightMode } from 'react-icons/md';



function App() {
const [theme, setTheme] = useState(false)
const handlemode=()=>{
  let clr=theme?'white':'#27374D';
  let txtclr=theme?'black':'white';
  document.body.style.backgroundColor=clr;
  document.body.style.color=txtclr;
  setTheme(!theme)
}
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-4">
    <div onClick={handlemode}>{
      theme?<MdLightMode size={30}/>:<MdDarkMode size={30}/>
      }</div>
    <NewTodo/>
    <TodoList />   
        </div>
  );
}

export default App;
