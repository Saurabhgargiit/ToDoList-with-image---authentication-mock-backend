import React, { useContext } from 'react';

import { TodoContext } from '../ToDoListContext';
import List from './List';

import './ToDoList.scss';

const ToDoList = () => {
    const { filteredData, imageList } = useContext(TodoContext);
    return (
        <ul>
            {filteredData.map((el) => {
                const { id, item, imageFlag, status } = el;
                if (imageFlag) {
                    const [imageObj] = imageList.filter((obj) => id === obj.id);
                    const { image } = imageObj;
                    return (
                        <List
                            item={item}
                            id={id}
                            key={id}
                            imageFlag={imageFlag}
                            status={status}
                            imageData={image}
                        />
                    );
                }
                return (
                    <List item={item} id={id} key={id} imageFlag={imageFlag} status={status}></List>
                );
            })}
        </ul>
    );
};

export default ToDoList;
