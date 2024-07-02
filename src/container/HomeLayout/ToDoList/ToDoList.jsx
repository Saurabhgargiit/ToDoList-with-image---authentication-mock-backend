import React, { useContext } from 'react';

import { TodoContext } from '../ToDoListContext';
import List from './List';

import './ToDoList.scss';

const ToDoList = () => {
    const { listData } = useContext(TodoContext);
    return (
        <ul>
            {listData.map((el) => (
                <List key={el.id} item={el.item} id={el.id}></List>
            ))}
        </ul>
    );
};

export default ToDoList;
