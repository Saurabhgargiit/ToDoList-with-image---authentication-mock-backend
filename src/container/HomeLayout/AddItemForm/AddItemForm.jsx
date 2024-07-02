import React, { useRef, useContext, useEffect, useState } from 'react';
import { TodoContext } from '../ToDoListContext';
import Button from '../../../components/Button/Button';

const AddItemForm = (props) => {
    const todoTextInputRef = useRef(null);
    const todoImageInputRef = useRef(null);
    const fileReaderRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);

    //Below state is triggered only when image is changed in edit mode
    //to save unnecessary storage to localstorage
    const [imageUpdated, setImageUpdated] = useState(false);

    const { edit, editData, submitHandler } = useContext(TodoContext);

    const formSubmit = (event) => {
        event.preventDefault();
        const textData = todoTextInputRef.current.value;
        if (textData.trim().length === 0) return;
        submitHandler(textData, imagePreview, imageUpdated);
        todoTextInputRef.current.value = '';
        clearImage();
    };

    const handleImageChange = () => {
        const file = todoImageInputRef.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            fileReaderRef.current = reader;
            if (edit) setImageUpdated(true);
        } else {
            setImagePreview(null);
        }
    };

    const clearImage = (imageUpdated) => {
        setImagePreview(null);
        setImageUpdated(imageUpdated); //flag to decide in case while editing photo is cleared
        todoImageInputRef.current.value = null;

        if (fileReaderRef.current && fileReaderRef.current.readyState === FileReader.LOADING) {
            fileReaderRef.current.abort();
        }
        fileReaderRef.current = null;
    };

    useEffect(() => {
        if (edit) {
            const { id, status, item, imageFlag, image } = editData;
            todoTextInputRef.current.value = item;
            if (imageFlag) {
                // Check if there is an image flag and an existing image
                if (imageFlag && image) {
                    setImagePreview(image);
                } else {
                    setImagePreview(null);
                }
            }
        }
    }, [editData, edit]);

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='TodoInput'>Add Todo item</label>
            <input type='text' id='TodoInput' ref={todoTextInputRef}></input>
            <label htmlFor='TodoImage' className='noDisplay'>
                Add Image
            </label>
            <input
                type='file'
                id='TodoImage'
                ref={todoImageInputRef}
                onChange={handleImageChange}
            ></input>
            {imagePreview && (
                <>
                    <img
                        src={imagePreview}
                        alt='Preview'
                        style={{ width: '100px', height: '100px' }}
                    />
                    <Button title='CLear Image' onClickCallBk={() => clearImage(edit)} />
                </>
            )}
            <Button style='primary' title='Add Item' type='submit' onClickCallBk={formSubmit} />
        </form>
    );
};

export default AddItemForm;
