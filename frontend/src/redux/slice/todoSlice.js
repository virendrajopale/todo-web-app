import {createSlice} from '@reduxjs/toolkit'
import { createTodo, deletetodo, getTodos, updateTodo } from '../action/todoAction'


 export const todoSlice=createSlice({
    name:"todoSlice",
    initialState:{
     todos:[],
     todo:{},

     error:null,
     loading:false,
     message:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
        builder.addCase(getTodos.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(getTodos.fulfilled,(state,action)=>{
            state.loading=false;
            state.todos=action.payload;
        })
        builder.addCase(getTodos.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
        builder.addCase(createTodo.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(createTodo.fulfilled,(state,action)=>{
            state.loading=false;
            state.todo=action.payload;

        })
        builder.addCase(createTodo.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
        builder.addCase(updateTodo.pending, (state) => {
            state.loading = true;
            state.error = null; // Clear any previous error
          });
          builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todo = action.payload;
          });
          builder.addCase(updateTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
        
        builder.addCase(deletetodo.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(deletetodo.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        builder.addCase(deletetodo.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })

        
    }
 })
 export default todoSlice.reducer