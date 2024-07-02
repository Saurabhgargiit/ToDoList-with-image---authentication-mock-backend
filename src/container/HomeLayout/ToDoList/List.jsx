import React, { useContext } from 'react';
import { TodoContext } from '../ToDoListContext';

import './List.scss';
import Button from '../../../components/Button/Button';

const List = ({ id, item, imageFlag, status, imageData }) => {
    const { removeFunction, editFunction, checkBoxHandler } = useContext(TodoContext);

    return (
        <li id={id} key={'li' + id} className={'list'}>
            <label htmlFor={id + 'check'} className='checkbox-container sub-heading'>
                <input
                    type='checkbox'
                    id={id + 'check'}
                    checked={status === 'completed'}
                    onChange={(e) => checkBoxHandler(id, e.target.checked)}
                />
                <span className='checkbox' aria-label='Checkbox to mark complete'></span>
            </label>
            <p>{item}</p>
            {imageFlag && (
                <img src={imageData} alt={item} style={{ width: '100px', height: '100px' }} />
            )}
            <div>Status:{status}</div>
            <Button title='Delete' onClickCallBk={() => removeFunction(id)} />
            <Button title='Edit' onClickCallBk={() => editFunction(id)} />
        </li>
    );
};

export default List;
