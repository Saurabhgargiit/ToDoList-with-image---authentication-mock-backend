import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Todo, TodoImage } from './ToDoList/TodoClass';

const intialValue = {
    listData: [],
    edit: false,
    editData: {},
    imageList: [],
    submitHandler: () => {},
    editFunction: () => {},
    removeFunction: () => {},
};

export const TodoContext = React.createContext(intialValue);

export const ToDoProvideContext = ({ children }) => {
    const [listData, setListData] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    const firstLoadRef = useRef(true);

    const { userId } = useSelector((state) => state.login.loggedInData.userInfo.data);

    //Below fn is called after form submission for adding the list item
    const addTodo = (textData, imageData) => {
        const imageFlag = !!imageData;
        const newData = new Todo(textData, imageFlag, 'tobeDone');
        const { id } = newData;
        if (imageFlag) {
            addTodoImage(id, imageData);
        }
        setListData((prev) => [...prev, newData]);
    };

    //Below fn is called after form submission for adding the new image
    const addTodoImage = (id, imageData) => {
        const newImageData = new TodoImage(id, imageData);
        setImageList((prev) => [...prev, newImageData]);
    };

    //Below Fn is called after form submission for updating the data (edit)
    const updateTodo = (data, imageData, imageModifed) => {
        const { id } = editData;
        setListData((prev) =>
            prev.map((todo) => {
                if (todo.id === id) return { ...todo, item: data, imageFlag: !!imageData };
                return todo;
            })
        );
        if (imageModifed) {
            if (imageData) {
                setImageList((prev) =>
                    prev.map((todoImg) => {
                        if (todoImg.id === id) return { ...todoImg, image: imageData };
                        return todoImg;
                    })
                );
            } else {
                setImageList((prev) => prev.filter((el) => el.id !== id));
            }
        }
        setEdit(false);
        setEditData({});
    };

    //Below is called when form is submitted for both new data additin and editing the data
    const submitHandler = (textData, imageData, imageModifed) => {
        if (edit) {
            updateTodo(textData, imageData, imageModifed);
        } else {
            addTodo(textData, imageData);
        }
    };

    //editHandler function is called when edit button is clicked
    const editHandler = (id) => {
        const [item] = listData.filter((el) => {
            return el.id === id;
        });
        if (item.imageFlag) {
            const [imageObj] = imageList.filter((el) => el.id === item.id);
            const { image } = imageObj;
            setEditData({ ...item, image });
        } else {
            setEditData(item);
        }
        setEdit(true);
    };

    //when delete is clicked
    const deleteHandler = (id) => {
        let index;
        const newList = listData.filter((el, i) => {
            if (el.id === id) index = i;
            return el.id !== id;
        });
        if (listData[index].imageFlag) {
            setImageList((prev) => imageList.filter((el, i) => el.id !== id));
        }
        setListData(() => newList);
    };

    // Below are functions for updates to localstorage triggered by useEffect
    const updateListToStorage = () => {
        setTimeout(() => {
            localStorage.setItem(`${userId}_todolist`, JSON.stringify(listData));
        }, 0);
    };

    const updateImagesToStorage = () => {
        setTimeout(() => {
            localStorage.setItem(`${userId}_images`, JSON.stringify(imageList));
        }, 0);
    };

    //load data from localstorage when logged in for first time
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(`${userId}_todolist`));
        const savedImageData = JSON.parse(localStorage.getItem(`${userId}_images`));
        if (savedData) {
            setListData(() => savedData);
        }
        if (savedImageData) {
            setImageList(() => savedImageData);
        }
    }, []);

    //For saving todo list to localstorage
    useEffect(() => {
        if (firstLoadRef.current) return;
        updateListToStorage();
    }, [listData]);

    //For saving todo list image to localstorage
    useEffect(() => {
        if (firstLoadRef.current) {
            firstLoadRef.current = false;
            return;
        }
        updateImagesToStorage();
    }, [imageList]);

    return (
        <TodoContext.Provider
            value={{
                listData: listData,
                edit: edit,
                editData: editData,
                imageList: imageList,
                submitHandler: submitHandler,
                editFunction: editHandler,
                removeFunction: deleteHandler,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
