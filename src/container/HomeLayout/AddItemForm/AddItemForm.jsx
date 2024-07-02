import React, { useRef, useContext } from 'react';
// import { TodoContext } from '../context/store';
import Button from '../../../components/Button/Button';

const AddItemForm = (props) => {
    const todoTextInputRef = useRef(null);
    // const ctx = useContext(TodoContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const data = todoTextInputRef.current.value;
        if (data.trim().length === 0) return;
        // ctx.submitHandler(data);
        todoTextInputRef.current.value = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='TodoInput'>Add Todo item</label>
            <input type='text' id='TodoInput' ref={todoTextInputRef}></input>
            <Button style='primary' title='Add Item' type='submit' onClickCallBk={submitHandler} />
        </form>
    );
};

export default AddItemForm;
