# Todo List

A simple Todo List application built with React and Tailwind CSS.
This project was created as a practice project to work with React state, components, props, localStorage, and Tailwind CSS.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Save tasks to `localStorage`
- Keep tasks after refreshing the page
- Reusable React components
- Custom color theme with Tailwind CSS
- Montserrat font
- Flexible layout using Tailwind CSS utility classes

## Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- HTML5
- CSS3
- Local Storage

## React Concepts Used

- Functional Components
- `useState`
- `useEffect`
- `useRef`
- Props
- Event Handling
- Conditional Rendering
- Array `.map()`
- Array `.filter()`
- Spread Syntax
- Immutable State Updates
- Component Communication
- Local Storage

## Project Structure

```text
src/
├── assets/
│   ├── delete.png
│   ├── not_tick.png
│   ├── not_tick-1.png
│   ├── tick.png
│   ├── tick-1.png
│   └── todo_icon.png
│
├── components/
│   ├── Todo.jsx
│   └── TodoTask.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

Each todo is stored as an object:

```js
{
  id: 123456789,
  todo: "Learn React",
  isComplete: false
}
```

The todo list is stored in React state using `useState`.

When a new task is added, a new todo object is created and added to the existing array:

```js
setTodoList((prev) => [...prev, newTodo]);
```

When a task is completed, its `isComplete` value is changed.

When a task is deleted, `.filter()` creates a new array without that task.

The todo list is also saved to `localStorage` using `useEffect`, so the tasks remain after refreshing the page.

## Styling

The project uses Tailwind CSS with a custom theme:

```css
@theme {
  --color-primary: #1b0c0c;
  --color-secondary: #597928;
  --color-tertiary: #f5efe3;
  --font-main: "Montserrat", sans-serif;
}
```

The project uses three main colors:

- Primary: `#1B0C0C`
- Secondary: `#597928`
- Tertiary: `#F5EFE3`

## Getting Started

Clone the repository and install the dependen
