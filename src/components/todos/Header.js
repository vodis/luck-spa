import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

const Header = ({ addTodo }) => (
    <header className="header">
        <h1>Todo List</h1>
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                    addTodo(text)
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>
);

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(Header);
