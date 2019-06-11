import {isEnabled} from './lib/feature';
import {todos} from './lib/state';
import IncrementalDOM from 'incremental-dom';

let {elementOpen, elementClose, elementVoid, text, patch}  = IncrementalDOM;

export function render() {
    return (
        <div>
            {
                isEnabled('renderBottom') ? renderAddTodoAtBottom() : renderAddTodoAtTop()
            }
            {
                isEnabled('filters') ? showFilters() : ''
            }
        </div>
    );
}

function renderAddTodoAtTop() {
    return (
        <div id="app">
            {renderInput()}
            {renderTodos()}
        </div>
    );
}

function renderAddTodoAtBottom() {
    return (
        <div id="app">
            {renderTodos()}
            {renderInput()}
        </div>
    );
}


function renderInput() {
    return (
        <div class="todo__input"><input type="text" id="todoInput"/>
            <button id="addTodo">Add</button>
        </div>
    );
}

function showFilters() {
    let status = todos.getState().filterState;
    let options = ['all', 'open', 'closed'];

    return (
        <div class="todo__filter">
            {
                options.map((value, i)=> {
                    return showOptions(value, status);
                })
            }
        </div>
    );
}

function showOptions(value, filterStatus) {
    return (
        <label>
            <input type="radio" name="filter" class="todo_filter" checked={filterStatus === value || undefined}
                   value={value}/>
            Show {value}
        </label>
    )
}

function renderTodos() {
    let state = todos.getState();
    const todoItems = state.todos.filter(function (v, i) {
        return state.filterState === "all" ? true : (state.filterState === "open" ? v.done === false : v.done === true );
    });
    return (
        <ul class="todo">
            {todoItems.map(renderTodoItem)}
        </ul>);
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return (
        <li class={todoClass}>
            <input class="js_toggle_todo" type="checkbox" data-id={todo.id}
                   checked={todo.done ? todo.done : undefined}/>
            {todo.text}
        </li>
    );
}
