import {todos} from './lib/state';
import {listen} from './lib/events';
import {addTodo, toggleTodoState, filterTodo} from './actions';

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        if(todoInput.value != ''){
            todos.dispatch(addTodo(todoInput.value));
            event.stopPropagation();
        }
    });

    listen('click', '.todo_filter', event => {
        const filterType = event.target.value;
        todos.dispatch(filterTodo(filterType));
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });
}
