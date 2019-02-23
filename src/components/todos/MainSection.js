import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import VisibleTodoList from '../../containers/VisibleTodoList';
import * as TodoActions from "../../actions";
import { getCompletedTodoCount } from "../../selectors";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const MainSection = ({ todosCount, completedCount, actions }) =>
    (
        <section className="main">
            {
                !!todosCount &&
                <span>
          <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount === todosCount}
              readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
            }
            <VisibleTodoList />
            {
                !!todosCount &&
                <Footer
                    completedCount={completedCount}
                    activeCount={todosCount - completedCount}
                    onClearCompleted={actions.clearCompleted}
                />
            }
        </section>
    );

MainSection.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        todosCount: state.firestore.ordered.todos !== undefined ? state.firestore.ordered.todos.length : 0,
        completedCount: getCompletedTodoCount(state)
    }
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});


export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    firestoreConnect(props => [
        { collection: 'todos' }
    ])
)(MainSection);