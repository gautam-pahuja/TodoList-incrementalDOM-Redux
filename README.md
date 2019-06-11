WEB-103

WEB-120 - Used LocalStorage

WEB-203 - Used Redux

WEB-301 - Used an additional babel-plugin with incremental-dom(babel-plugin-incremental-dom)



# Case Study: Extend a simple list application

During this case study, you'll be asked to extend and modify a simple todo list
application.

## Requirements

Please make sure that you have Node.js and npm installed on your system. This
application is built with webpack, and without those two tools, you can't proceed.

- Node.js (recommended: 4.x)
- npm (recommended: 2.x or 3.x)

## Setup

Once you're sure everything is in order, please install all required npm modules
by using the command:

```sh
npm install
```

To build the project, please type

```sh
npm run build
```

and to keep rebuilding it while you're working on the project, use

```sh
npm start
```

Once you've compiled the bundle, you can open the `index.html` in your browser
and check out the application.

## How to enable a test?

As this is supposed to be a case study and not a real world application,
you can enable a specific test by appending "#testName" to the URL.

For example, to enable the "renderBottom" test, you would open the `index.html` 
and append a "#renderBottom" to it.

Example URL:
```
Note that the input field is now rendered below the todo list.

## About the tasks

Below you'll find a list of tasks that should be solved for this case study.

If you have received specific instructions on which of these you should resolve,
please do that. If you are interested in solving a task that you were not
explicitly instructed to solve, we won't stop you from solving it and are of course
very interested in your solution for it. But please make sure to solve those
that we have requested first.

In general, you can choose freely which of these tasks you'd like to work on. We've
carefully chosen the tasks and believe that they should be fun to solve.

Each task allows you to highlight a different area of your abilities. Some require
extensive knowledge and we generally don't require anyone to be able to solve them.

To make it easier for us to know which tasks you've worked on, you could commit
the state of the application to git using the task ID as part of your commit message
and then send us the git repository for review. Otherwise, please provide at least
a list of the tasks you've worked on.

If you started with a task but didn't manage to finish it, it might be a good idea
to still keep your changes for it and explain what kept you from finishing it.

## The tasks

### WEB-101: Support enter key for add todo field

We'd like to be able to add a new todo by using the `enter` key on the keyboard.

### WEB-102: Adding a new todo causes text field focus to be lost

Ever since we've added the ability to enter new todo items by pressing the `enter` key
on the keyboard, our users have started to complain about the fact that after adding their
new todo, they have to manually focus the text field again.

Please ensure that after adding a new todo item, the focus will stay with the text
field.

### WEB-103: Add status filtering test

As a user, I want the option to hide todo items that I am not interested in based
on their status.

The feature should be implemented as a feature test (similar to "renderBottom") and
should be called "filter".

Please implement a filter bar at the bottom of the list which contains three radio buttons:

- Show all (enabled by default)
- Show open
- Show closed

Those radio buttons are supposed to be mutually exclusive so that only one of them
can be selected at any given time.

If "Show open" is selected, only todo items whose `done` state is `false` should
be displayed in the list.

If "Show closed" is selected, only todo items whose `done` state is `true` should
be displayed in the list.

### WEB-104: Change filter position test

It turns out that the filter test performed quite negatively for users who also have the
`renderBottom` feature enabled.
Our UX experts are fairly sure that this is because, with both features enabled
(append `#renderBottom#filter` to the `index.html` URL), the lower part of the
user interface feels a bit overloaded.

We would like to test positioning the filter at the top when the input is placed at
the bottom of the application.

This test should be called "filterTop" and should only be usable when both `renderBottom`
and `filter` are active, i.e. the URL could be something like 
`index.html#filter#renderBottom#filterTop`.

### WEB-110: Improve visual appearance

Our design department believes that the design used for the todo application is
not particularly suited for the application and could be improved to be more visually
pleasing.

Please improve the design of the application. You are free to make your own design,
or to implement an existing design. If you can't decide on how you would like the application
to look, our proposal would be [this one](https://dribbble.com/shots/2084038-Just-Do).

You are free to add a CSS preprocessor such as Sass or PostCSS to the webpack build
to make your live a bit easier.

### WEB-120: Save users todo items

We would like to add the ability to save the todo items that a user has entered
into the application so that even if the user reloads the page, he won't lose
his todo list.

The decision of what technology should be used to accomplish this feature is up
to you. It is sufficient if your solution works on modern versions of Chrome,
Firefox and Edge.

### WEB-201: Extract CSS into separate file

Currently, the CSS for the application is included within the `bundle.js`.
However, our users have started to complain about the initially unstyled application
and we'd like to deliver the CSS separately instead.

Please integrate the extract-text-webpack-plugin into the webpack configuration 
and load the generated CSS file separately from the JavaScript bundle.

### WEB-202: Optimized bundle generation

Currently, the generated bundle is not optimized and quite large for such a small application.
Please adjust the webpack configuration so that we can create an optimized bundle instead.
Ideally, we'd like to have both the JavaScript and the CSS minified and optimized.


### WEB-203: Replace lib/state.js

It turns out our developers are not immune to the "not invented here syndrome", and
thought it would be a good idea to just reimplement a popular library.
As there is no good reason to maintain our own library in this case, we'd like
to replace "lib/state.js" with the original library that it was influenced by.

Please identify the original library and refactor the code to use that library instead
of our incomplete and untested version.

### WEB-301: Optimize the view rendering

Unfortunately, some of our users have started to complain quite loudly about
the performance of our application. Somehow, they have managed to add over a thousand
todo items and when they're using the application, they can notice a flickering
whenever they add or toggle a todo item.

Our performance team has identified that this is due to the way we render the todos.
Please replace the `innerHTML` based approach with one based on `incremental-dom`.
Feel free to add a `Babel` plugin to be able to use JSX syntax or any of the supported
template engines. You can of course also write the instructions manually.

`incremental-dom` is not the only option in this case. If you prefer to use
another library, you may do so as well. If you decide to do that, please provide
a written explanation of why you believe that solution to be preferable.

**Note:** Choosing a large popular framework like React instead of
`incremental-dom` or a similar smaller lesser known framework/library is not in
the interest of this case-study and if you do decide to use it, you'd have to provide
a really well thought-through explanation and an exceptional implementation
for us to even consider it. Use the chance to familiarize yourself with some
alternatives and play around with those instead.

### WEB-302: Static feature compilation

We would like to be able to decide at compile type whether or not the "filter" 
feature should be enabled.

Please create a babel plugin which can statically replace `isEnabled('filter')` with
either `true` or `false` based on the selected webpack configuration. Hint: You might need
to create a webpack loader.

### WEB-303: Improve developer experience

We've noticed that our developers are not as productive as they could be due to the
need to constantly reload the page and having to wait for the webpack watcher to finish.
We believe that by using the webpack dev server, they could be more productive.

Please adjust all necessary parts of the application so that they're able to use
the webpack-dev-server and ideally enable hot reloading for at least the CSS.
