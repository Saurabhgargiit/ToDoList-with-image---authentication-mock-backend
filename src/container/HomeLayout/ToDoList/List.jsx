import React, { useContext } from 'react';
import { TodoContext } from '../ToDoListContext';

import Button from '../../../components/Button/Button';
import './List.scss';

const List = ({ id, item, imageFlag, status, imageData }) => {
    const { removeFunction, editFunction, checkBoxHandler } = useContext(TodoContext);

    return (
        <li id={id} key={'li' + id} className='displayFlex'>
            <div className={'list'}>
                <label htmlFor={id + 'check'} className='checkbox-container'>
                    <input
                        type='checkbox'
                        id={id + 'check'}
                        checked={status === 'completed'}
                        onChange={(e) => checkBoxHandler(id, e.target.checked)}
                    />
                    <span className='checkbox' aria-label='Checkbox to mark complete'></span>
                </label>
                <p className='taskDetail'>{item}</p>
                <div className={'image-preview-container ' + (!imageFlag ? 'noImage' : '')}>
                    {imageFlag && <img src={imageData} alt={item} />}
                </div>
            </div>
            <div className=''>
                <Button
                    title='Delete'
                    onClickCallBk={() => removeFunction(id)}
                    className='formbutton'
                />
                <Button
                    title='Edit'
                    onClickCallBk={() => editFunction(id)}
                    className='formbutton'
                />
            </div>
        </li>
    );
};

export default List;
