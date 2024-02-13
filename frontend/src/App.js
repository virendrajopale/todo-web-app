

import { NewTodo } from './components/NewTodo';
import TodoList from './components/TodoList';



function App() {
 
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-4">
   
    <NewTodo/>
    <TodoList />   
        </div>
  );
}

export default App;
