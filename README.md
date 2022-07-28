# TODO list

Simple should be simple, but with a twist

Take a simple project and use best practices

## Start

1. Getting Started with [`create-react-app`](https://create-react-app.dev/)

2. Implement TODO app with next logic:
    - user can create task, by entering some text to input, and clicking submit button
    - user can read created tasks in list
    - user can update each task, by clicking on "edit" button near task text, changing task text in input and pressing "save" button when complete
    - user can delete each task, by clicking on "delete" button near task text 
3. Add statistic counter on top of tasks list to show count of:
    - created tasks
    - updated tasks
    - deleted tasks
4. Add functionality to fetch initial list of TODO tasks to your list. Use GET request from resource link [https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json](https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json), to receive array of objects.

## Styling tools for React app

1. Use [styled-components](https://styled-components.com/)
2. Add [Quick guide about SCSS(Sass)](https://sass-lang.com/guide) and [Sass in create-react-app](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
3. Implement [css-modules](https://github.com/css-modules/css-modules) and [css-modules in create-react-app](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

## Redux

1. Create `<Modal />` component or install and use any package (for example: `react-modal`)
2. Move input component with all related logic inside `<Modal />`
3. Update your logic of creating/updating todo list items, to use redux store instead of react state. After this update you shouldn't have any props, that trows handler functions and todo items between components. Instead all data should be taken from redux store, and all data changing handlers should be changed to redux actions.
4. Add [redux-persist](https://github.com/rt2zz/redux-persist) to project and use it to save store to `localStorage`.

## Typescript
1. Add Typescript to a ToDoList project and refactor all code to be "true" Typescript. Use official guide ["TypeScript for JavaScript Programmers"](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)