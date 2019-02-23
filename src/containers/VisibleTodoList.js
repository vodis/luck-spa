import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TodoList from '../components/todos/TodoList';
import { getVisibleTodos } from '../selectors';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


const mapStateToProps = state => {
    return {
        filteredTodos: getVisibleTodos(state, state.firestore.ordered)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
};

const VisibleTodoList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([
        { collection: 'todos' }
    ])
)(TodoList);

export default VisibleTodoList;