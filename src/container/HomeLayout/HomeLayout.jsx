import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm';
import { ToDoProvideContext } from './ToDoListContext';
import ToDoList from './ToDoList/ToDoList';

function HomeLayout() {
    return (
        <ToDoProvideContext>
            <AddItemForm />
            <ToDoList />
        </ToDoProvideContext>
    );
}

export default HomeLayout;
