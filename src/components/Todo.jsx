import React, {useState} from "react";
import styles from "./todo.module.css";


export const Todo = ({value}) => {
    const [isStriked, setIsStriked] = useState(false);
    return (
        <li className={styles.todoItem}>
            <input type="checkbox" onChange={()=>{setIsStriked(!isStriked);}}/>
            <span className={isStriked ? styles.strike : styles.normal}>{value}</span>
        </li>
    ) 
}