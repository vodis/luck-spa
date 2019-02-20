import React, { Component } from 'react';

class TodoItem extends Component {
    state = {
        editing: false
    };

    // to delete todo item.
    // to create todo item.
    // to update todo item.
    // to mark todo as completed or incomplete todo.

    render() {
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">ToDo Title</span>
                </div>
            </div>
        );
    }
}

export default TodoItem;