import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm';
import { ToDoProvideContext } from './ToDoListContext';
import ToDoList from './ToDoList/ToDoList';
import Filter from './Filter/Filter';

function HomeLayout() {
    return (
        <ToDoProvideContext>
            <Filter />
            <AddItemForm />
            <ToDoList />
        </ToDoProvideContext>
    );
}

export default HomeLayout;
