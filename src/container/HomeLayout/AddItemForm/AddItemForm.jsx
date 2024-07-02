import React, { useRef, useContext, useEffect } from 'react';
import { TodoContext } from '../ToDoListContext';
import Button from '../../../components/Button/Button';

const AddItemForm = (props) => {
    const todoTextInputRef = useRef(null);
    const { edit, editData, submitHandler } = useContext(TodoContext);

    const formSubmit = (event) => {
        event.preventDefault();
        const data = todoTextInputRef.current.value;
        if (data.trim().length === 0) return;
        submitHandler(data);
        todoTextInputRef.current.value = '';
    };

    useEffect(() => {
        if (edit) {
            todoTextInputRef.current.value = editData.item;
        }
    }, [editData, edit]);

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='TodoInput'>Add Todo item</label>
            <input type='text' id='TodoInput' ref={todoTextInputRef}></input>
            <Button style='primary' title='Add Item' type='submit' onClickCallBk={formSubmit} />
        </form>
    );
};

export default AddItemForm;
