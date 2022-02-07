import React, { useState } from 'react';
import styles from "./todo.module.css";

export const TodoInput = ({todos,setTodos}) => {
    const [value, setValue] = useState("");
  return (<div>
    <input className={styles.inpt}
      type="text"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
    <button
      onClick={() => {
          if(value) {
            setTodos([...todos,value]);
            setValue("");
          }
          else{console.log("Enter a value")}
        
      }}
    >
      ADD
    </button>
  </div>);
};
