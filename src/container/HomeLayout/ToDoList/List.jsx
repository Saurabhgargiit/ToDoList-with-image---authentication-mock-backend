import React, { useContext } from 'react';
import { TodoContext } from '../ToDoListContext';

import './List.scss';
import Button from '../../../components/Button/Button';

const List = ({ id, item, imageFlag, status, imageData }) => {
    const { removeFunction, editFunction } = useContext(TodoContext);

    return (
        <li id={id} key={'li' + id} className={'list'}>
            <p>{item}</p>
            {imageFlag && (
                <img src={imageData} alt={item} style={{ width: '100px', height: '100px' }} />
            )}
            <Button title='Delete' onClickCallBk={() => removeFunction(id)} />
            <Button title='Edit' onClickCallBk={() => editFunction(id)} />
        </li>
    );
};

export default List;
