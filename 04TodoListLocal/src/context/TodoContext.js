import React, { useContext,createContext } from "react";

export const TodoContext = createContext({
    Todos:[
        { 
          id:1,
          todo:"this is msg",
          completed:false,
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    todoComplete:(id) => {},

});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider