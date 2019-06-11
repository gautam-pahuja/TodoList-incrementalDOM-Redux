export function listen(eventName, selector, handler) {
    document.body.addEventListener(eventName, event => {
        if(event.target.matches(selector)) {
            return handler(event);
        }
    });
}
