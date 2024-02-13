
const Todo =require( '../Models/TodoModel')
//new todo
exports.createToDo=async(req,res)=>{
    const {task,completed}=req.body
    try{
        const newTask=await Todo.create({task,completed});
        res.status(201).json({
            success:true,
            newTask
        })
    }catch(err){
        res.status(400).json({ error: 'Server error' })
    }
}
//all todo
exports.getAllTodos = async (req, res) => {
    try {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
//update todo
exports.updateTodo=async(req, res) =>{
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task, completed });
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.status(200).json(
      {updatedTodo}
      );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };