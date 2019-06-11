export function storage() {
    let key = 'todoList';
    let taskList = localStorage.getItem(key);
    if (!taskList) {
        localStorage.setItem(key, JSON.stringify({}));
    }
    let storage = JSON.parse(localStorage.getItem(key));
    return {
        setItem : localStorage.setItem(key, JSON.stringify(storage)),
        getItem : function () {
            return JSON.parse(localStorage.getItem(key));
        },
        addTodoItem : (newItem, itemId) =>{
            storage[itemId] = newItem;
            localStorage.setItem(key, JSON.stringify(storage))
        },
        updateTodoItem : (updatedItem, itemId) =>{
            storage[itemId] = updatedItem;
            localStorage.setItem(key, JSON.stringify(storage))
        }
    };
}
