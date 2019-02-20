import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    return (
        <div className="project-list section">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    );
};

export default TodoList;