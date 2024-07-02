import React, { useContext } from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { TodoContext } from '../ToDoListContext';

const Filter = () => {
    const { filteredType, tasksFilterHandler } = useContext(TodoContext);

    const filterTypes = [
        { key: 'all', value: 'all', label: 'All tasks' },
        { key: 'completed', value: 'completed', label: 'Completed Tasks' },
        { key: 'tobeDone', value: 'tobeDone', label: 'To be completed' },
    ];

    return (
        <Dropdown
            options={filterTypes}
            onChangeCallBk={tasksFilterHandler}
            selectedValue={filteredType}
        />
    );
};

export default Filter;
