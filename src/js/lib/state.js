import {createStore} from 'redux';
import {storage} from './localStorage';

let taskList = storage();
let taskItems = getTodoList(taskList.getItem());

function getTodoList(obj) {
    let todoList = [];
    for (let key of Object.keys(obj)){
        todoList.push(obj[key]);
    }
    return todoList;
}

const initialState = {
    todos: [
        {
            id: 0,
            text: 'Take a look at the application',
            done: true
        },
        {
            id: 1,
            text: 'Add ability to filter todos',
            done: false
        },
        {
            id: 2,
            text: 'Filter todos by status',
            done: false
        },
        {
            id: 3,
            text: 'Filter todos by text',
            done: false
        }
    ],
    filterState : 'all'
};

let newInitialState = initialState;

if(taskItems.length){
    newInitialState = Object.assign({}, initialState, {
        todos : taskItems
    })
} else {
    initialState.todos.forEach((v,i)=>{
        taskList.addTodoItem(v,i);
    })
}

const todoChangeHandler = (state = newInitialState, action='') => {

    switch (action.type) {
        case 'ADD_TODO':
            var item = {
                id: state.todos.length,
                text: action.text,
                done: false
            };
            taskList.addTodoItem(item, state.todos.length);
            state.todos.push(item);
            return state;

        case 'TODO_TOGGLE_DONE':
            let todos = state.todos, index = action.id;
            let updatedTodo = Object.assign({}, todos[index], {done : !todos[index].done});
            state.todos[index] = updatedTodo;
            taskList.updateTodoItem(updatedTodo, index);
            return state;

        case 'FILTER_TODO':
            state.filterState = action.text;
            return state;

        default:
            return state;
    }
};


export const todos = createStore(todoChangeHandler);
