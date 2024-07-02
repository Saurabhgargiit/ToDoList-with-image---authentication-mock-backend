import React, { useContext } from 'react';
import { TodoContext } from '../ToDoListContext';

import './List.scss';
import Button from '../../../components/Button/Button';

const List = ({ id, item }) => {
    const { removeFunction, editFunction } = useContext(TodoContext);

    return (
        <li id={id} key={id} className={'list'}>
            <p>{item}</p>
            <Button title='Delete' onClickCallBk={() => removeFunction(id)} />
            <Button title='Edit' onClickCallBk={() => editFunction(id)} />
        </li>
    );
};

export default List;
