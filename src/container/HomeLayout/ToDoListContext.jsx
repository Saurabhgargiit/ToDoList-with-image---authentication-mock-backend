import React, { useState } from 'react';
import { Todo } from './ToDoList/TodoClass';

const intialValue = {
    listData: [],
    edit: false,
    editData: {},
    submitHandler: () => {},
    editFunction: () => {},
    removeFunction: () => {},
};

export const TodoContext = React.createContext(intialValue);

export const ToDoProvideContext = ({ children }) => {
    const [listData, setListData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    const addTodo = (data) => {
        const newData = new Todo(data);
        setListData((prev) => [...prev, newData]);
    };

    const updateTodo = (data) => {
        const { id } = editData;
        setListData((prev) =>
            prev.map((todo) => {
                if (todo.id === id) return { ...todo, item: data };
                return todo;
            })
        );
        setEdit(false);
        setEditData({});
    };

    const submitHandler = (data) => {
        if (edit) {
            updateTodo(data);
        } else {
            addTodo(data);
        }
    };

    const editHandler = (id) => {
        const [item] = listData.filter((el) => {
            return el.id === id;
        });
        setEdit(true);
        setEditData(item);
    };

    const deleteHandler = (id) => {
        const newList = listData.filter((el) => {
            return el.id !== id;
        });
        setListData(() => newList);
    };

    return (
        <TodoContext.Provider
            value={{
                listData: listData,
                edit: edit,
                editData: editData,
                submitHandler: submitHandler,
                editFunction: editHandler,
                removeFunction: deleteHandler,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
