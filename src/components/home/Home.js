import React, { Component } from 'react';
import TodoList from '../projects/TodoList';

class Home extends Component {
    render() {

        return (
            <div className="home container">
                <div className="row">
                    <div className="col">
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;