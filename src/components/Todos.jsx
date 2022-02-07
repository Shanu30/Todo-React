import React, { useState } from "react";
import {Todo} from "./Todo";
import { TodoInput } from "./TodoInput";

export const Todos = () => {
  const [todos,setTodos] = useState([]);
  
  

  return (
    <div>
      <TodoInput todos = {todos} setTodos = {setTodos}/>
      <div>
          <ul>  
            {todos.map((todo) => 
                <Todo value= {todo} />
            )}
          </ul>
          
      </div>
    </div>
  );
};
