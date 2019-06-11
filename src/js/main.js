import '../css/main.css';

import {todos} from './lib/state';
import {render} from './view';
import {registerEventHandlers} from './events';
import {patch} from 'incremental-dom'

const renderTodo = () => {
    patch(document.body, render)
};
todos.subscribe(renderTodo);
renderTodo();
registerEventHandlers();
