import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm';
import { ToDoProvideContext } from './ToDoListContext';
import ToDoList from './ToDoList/ToDoList';
import Filter from './Filter/Filter';

import './HomeLayout.scss';

function HomeLayout() {
    return (
        <ToDoProvideContext>
            <div className='layout'>
                <div className='form-container'>
                    <Filter />
                    <AddItemForm />
                </div>
                <div className='list-container'>
                    <ToDoList />
                </div>
            </div>
        </ToDoProvideContext>
    );
}

export default HomeLayout;
