# React State Management: Context API & Redux
### A Beginner-Friendly Study Guide

---

## Table of Contents

1. [Introduction: Why Do We Need State Management?](#1-introduction)
2. [Context API](#2-context-api)
   - 2.1 [What is Context API?](#21-what-is-context-api)
   - 2.2 [Step 1 – Creating the Context](#22-step-1--creating-the-context)
   - 2.3 [Step 2 – The Provider (Filling the Context)](#23-step-2--the-provider)
   - 2.4 [Step 3 – Consuming the Context](#24-step-3--consuming-the-context)
   - 2.5 [Updating Context from a Component](#25-updating-context-from-a-component)
   - 2.6 [Full Context API Example](#26-full-context-api-example)
3. [Performance: React.memo](#3-performance-reactmemo)
4. [Redux (with Redux Toolkit)](#4-redux-with-redux-toolkit)
   - 4.1 [What is Redux?](#41-what-is-redux)
   - 4.2 [Step 1 – The Store](#42-step-1--the-store)
   - 4.3 [Step 2 – The Slice (createSlice)](#43-step-2--the-slice-createslice)
   - 4.4 [What is Immer?](#44-what-is-immer)
   - 4.5 [Step 3 – Using Redux in Components](#45-step-3--using-redux-in-components)
   - 4.6 [Full Redux Example](#46-full-redux-example)
5. [Context API vs Redux: When to Use Which?](#5-context-api-vs-redux)
6. [Key Takeaways](#6-key-takeaways)
7. [Common Pitfalls](#7-common-pitfalls)
8. [Practice Ideas](#8-practice-ideas)

---

## 1. Introduction

Imagine you have a React app with many components — a Navbar, a ProductCard, a Footer, and more. Some of these components need to share the same data, like whether the user is logged in or how many items are in a cart.

The naive approach is **prop drilling** — passing data from parent to child to grandchild through props. This gets messy fast.

**State management** solutions solve this. Instead of passing data down a chain, you store it in a central place and let any component access it directly.

React provides two main tools for this:
- **Context API** — built into React, great for simple or medium-scale needs
- **Redux** — a more structured, powerful solution for complex apps

---

## 2. Context API

### 2.1 What is Context API?

Context API lets you create a **shared data store** that any component in your app can access directly — without passing props through every layer.

Think of it like a **radio broadcast**:
- One station (the Provider) **broadcasts** data
- Any radio (component) that tunes in (uses `useContext`) **receives** that data automatically

The whole system involves **three players**:

| Player | Tool | Role |
|---|---|---|
| The Blueprint | `createContext()` | Creates the empty "space" for data |
| The Broadcaster | `<Context.Provider>` | Fills the space with real data |
| The Receiver | `useContext()` | Reads data from the space |

---

### 2.2 Step 1 – Creating the Context

`createContext()` initializes an empty space. It does **not** hold any data yet — it just creates a unique identifier that the Provider and consumers will share.

```jsx
// ThemeContext.js
import { createContext } from 'react';

// Create the empty "space" — just initialization, no data yet
export const ThemeContext = createContext();
```

**Key points:**
- This must be created **outside** any component so it stays stable across re-renders
- We `export` it so other files (the Provider and consumers) can import it
- The optional argument `createContext(null)` sets a default value — used only when a component tries to read context without being wrapped in a Provider

> 💡 **Analogy:** `createContext()` is like buying a SIM card. It has an identity, but no minutes or data yet. That comes later.

---

### 2.3 Step 2 – The Provider

The Provider is a wrapper component that **fills the context with real data** and makes it available to all components inside it.

```jsx
// ThemeContext.js (continued)
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  // The live data lives here, in a useState hook
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // value contains both the data AND the function to change it
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Breaking this down:**

- **`value={{ theme, toggleTheme }}`** — This is what gets "broadcast." We pass an object containing both the current data (`theme`) and a function to change it (`toggleTheme`).
- **`{children}`** — This is a placeholder for everything wrapped inside `<ThemeProvider>`. Any component placed inside the Provider tags can now access the context.
- **Double curly braces `{{ }}`** — The outer `{}` tells JSX "this is JavaScript." The inner `{}` creates a JavaScript object.

> 💡 **Analogy:** The Provider is an umbrella. Any component standing under it (the `children`) is protected — it can access the shared data. Anything outside the umbrella is in the dark.

**Wrapping your entire app in `main.jsx`:**

```jsx
// main.jsx
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

By wrapping `<App />`, every single component in your app can access the theme context.

---

### 2.4 Step 3 – Consuming the Context

To read data from the context, use the `useContext` hook inside any component.

```jsx
// ThemeButton.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeButton() {
  // "Tune in" to the ThemeContext broadcast
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#fff' : '#222',
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

**Key points:**
- You must import both `useContext` (from React) AND the specific context object you created
- Use **destructuring** to pull only what you need: `const { theme } = useContext(ThemeContext)`
- The component will **automatically re-render** whenever the context value changes

> ⚠️ **Common pitfall:** If you forget to wrap the component in a Provider, `useContext` will return the default value from `createContext()` (usually `null`). This causes "Cannot read property of null" errors.

---

### 2.5 Updating Context from a Component

A component can also **change** the context data — not just read it. The trick is that you pass the setter function (or a custom function) inside the `value` prop of the Provider.

```jsx
// ProductCard.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  // We only need the function, not the data
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
}
```

When `addToCart` is called:
1. It runs the function inside the Provider
2. The Provider's `useState` updates
3. Every component subscribed to `CartContext` re-renders with the new data

This is the **chain reaction** of Context API.

---

### 2.6 Full Context API Example

Here is a complete, self-contained example of a theme system:

```jsx
// context/ThemeContext.jsx
import { createContext, useState } from 'react';

// Step 1: Create the empty space
export const ThemeContext = createContext();

// Step 2: Build the Provider with live data
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

```jsx
// main.jsx
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

```jsx
// components/ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Step 3: Consume the context
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? '#111' : '#fff', padding: '20px' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
```

**The full flow:**
1. `createContext()` → Creates the empty space (blueprint)
2. `ThemeProvider` → Holds `useState`, puts data in `value`
3. `main.jsx` → Wraps `<App />` so all components can access it
4. `ThemeToggle` → Uses `useContext` to read and change the theme
5. When `toggleTheme` is called → state updates → Provider re-renders → `ThemeToggle` re-renders with new theme

---

## 3. Performance: React.memo

When the Provider's state changes, React re-renders all components inside it — even ones that don't use the context. For most apps this is fine, but it's useful to understand `React.memo`.

### What it does

`React.memo` wraps a component and tells React: **"Only re-render this component if its props have changed."**

```jsx
import { memo } from 'react';

const Footer = ({ year }) => {
  return <footer>© {year} My App</footer>;
};

// Wrapped in memo — won't re-render unless 'year' prop changes
export default memo(Footer);
```

### When to use it

| Use `React.memo` when... | Don't use it when... |
|---|---|
| Component is large/complex | Component is simple (a `<span>`) |
| Props rarely change | Props change on every render |
| Component re-renders too often | The comparison overhead > re-render cost |

> ⚠️ **The reference trap:** `React.memo` uses **shallow comparison**. If a prop is an object or function created inside the parent, it will be a *new reference* on every render — and `memo` will think the props changed even if the values are the same. Fix this with `useMemo` and `useCallback` (advanced hooks).

---

## 4. Redux (with Redux Toolkit)

### 4.1 What is Redux?

Redux is a more structured approach to state management. Where Context API is like a radio broadcast, Redux is like a **central bank with strict rules** about how money (data) can be moved.

The key difference: in Context API, a component can directly call `setTheme`. In Redux, a component must **file a formal request** (an Action) which goes through an **authorized manager** (a Reducer) before the Store is updated.

**Why the extra steps?**
- Every change is **recorded** (great for debugging)
- The logic for *how* data changes lives in one place
- Bugs are easier to trace — you always know which Reducer changed what

**The three main players:**

| Player | Role |
|---|---|
| **Store** | The single source of truth — one big JS object holding all state |
| **Action** | A plain object describing *what happened* |
| **Reducer** | A function that decides *how* the state changes in response to an action |

---

### 4.2 Step 1 – The Store

The Store is the single "vault" for your entire app's state. You create it with `configureStore` from Redux Toolkit.

```jsx
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,   // "books" is the address in state
    user: userReducer,     // "user" is the address in state
  }
});

export default store;
```

**What this creates:**

Redux builds a state object that looks like this:
```js
{
  books: { /* managed by booksReducer */ },
  user:  { /* managed by userReducer */ }
}
```

**Understanding the keys (`books:`, `user:`):**

- The key (e.g. `books`) is the **address** where the data lives in state
- The value (e.g. `booksReducer`) is the **authorized manager** for that section
- Later, when you want to read book data, you'll access `state.books`

> 💡 **Best practice:** Keep the key in `configureStore` the same as the `name` in your slice file (explained next). This avoids confusion.

**Connecting to your app in `main.jsx`:**

```jsx
// main.jsx
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

Note: Redux has its own `<Provider>` (from `react-redux`) that wraps your app and makes the store accessible.

---

### 4.3 Step 2 – The Slice (createSlice)

A **slice** is a self-contained unit that bundles together:
- The **initial state** (what the data looks like at startup)
- The **reducer functions** (the rules for changing the data)
- Auto-generated **actions** (the requests components can send)

```jsx
// store/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  // 1. NAME — the namespace for this slice's actions (e.g. "books/addBook")
  name: 'books',

  // 2. INITIAL STATE — what the data looks like when the app first loads
  initialState: {
    list: [],          // array → we can use .map() right away
    searchTerm: '',    // string → safe for input fields
    totalCount: 0,     // number → safe for math
    selectedBook: null // null → means "nothing selected yet"
  },

  // 3. REDUCERS — functions that define how the state can change
  reducers: {
    // Add a book: action.payload is the new book object
    addBook: (state, action) => {
      state.list.push(action.payload);
      state.totalCount += 1;
    },

    // Remove a book by id: action.payload is the id to remove
    removeBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload);
      state.totalCount -= 1;
    },

    // Update search term: action.payload is the new string
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // Clear everything — no payload needed
    clearLibrary: (state) => {
      state.list = [];
      state.totalCount = 0;
    }
  }
});

// Export the ACTION CREATORS — used by components to dispatch changes
export const { addBook, removeBook, setSearchTerm, clearLibrary } = booksSlice.actions;

// Export the REDUCER — used by configureStore
export default booksSlice.reducer;
```

**Breaking down each part:**

**`name`** — The slice's identity string. Redux uses this to build action type strings automatically. `name: 'books'` + `addBook` becomes the action type `"books/addBook"` behind the scenes.

**`initialState`** — The starting shape of your data. This serves two purposes:
1. It gives React the **initial values** to display before any user interaction
2. It signals the **type** of each piece of data (array, string, number, etc.) — this matters because you can only call `.map()` on an array, not a string

**`reducers`** — An object where each key is a function. Each function receives:
- `state` — the current data in this slice
- `action` — an object with a `payload` property containing the new data

> ⚠️ **Pitfall:** If you define `initialState: { list: '' }` (a string) but then call `state.list.map(...)` in a component, your app will crash. Always match the type to how you'll use the data.

**The exports — what goes where:**

| Export | Used by | Purpose |
|---|---|---|
| `booksSlice.actions` (destructured) | Components | To dispatch changes |
| `booksSlice.reducer` (default) | `configureStore` | To manage the slice |

---

### 4.4 What is Immer?

You may have noticed that inside the reducer functions, we seem to be **mutating** the state directly with `state.list.push(...)`. But earlier we said you should never mutate state directly. So what's going on?

**The answer is Immer** — a library built into Redux Toolkit.

When your reducer runs, Immer:
1. Creates a temporary **draft copy** of your state
2. Lets you write code as if you're modifying it directly
3. Detects all your changes and produces a **fresh, safe, new state object**

```jsx
// You write this (looks like mutation):
addBook: (state, action) => {
  state.list.push(action.payload);
}

// Immer turns it into the equivalent of this (actually safe):
addBook: (state, action) => {
  return {
    ...state,
    list: [...state.list, action.payload]
  };
}
```

**Why does this matter?**

React detects state changes by comparing object **references**. If you truly mutate the original object, React sees the same reference and thinks nothing changed — so it won't re-render.

Immer always returns a **new object**, so React always detects the change and updates the UI correctly.

> 💡 **Immer only works inside `createSlice` reducer functions.** Don't try to mutate state like this in regular React `useState` or outside of a slice.

---

### 4.5 Step 3 – Using Redux in Components

Components interact with Redux using two hooks from `react-redux`:

| Hook | Purpose | Analogy |
|---|---|---|
| `useSelector` | **Read** data from the store | Eyes — watching the scoreboard |
| `useDispatch` | **Send** actions to the store | Hands — pressing the button |

**`useSelector` — Reading data:**

```jsx
import { useSelector } from 'react-redux';

function BookList() {
  // "Go into the 'books' drawer and give me the 'list' array"
  const books = useSelector(state => state.books.list);
  const searchTerm = useSelector(state => state.books.searchTerm);

  return (
    <ul>
      {books
        .filter(book => book.title.includes(searchTerm))
        .map(book => <li key={book.id}>{book.title}</li>)
      }
    </ul>
  );
}
```

The path (`state.books.list`) must match:
- The key in `configureStore` → `books`
- The property in `initialState` → `list`

**`useDispatch` — Sending actions:**

```jsx
import { useDispatch } from 'react-redux';
import { addBook } from '../store/booksSlice';

function AddBookForm() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newBook = { id: Date.now(), title: 'Clean Code' };
    // Send the action to the store
    dispatch(addBook(newBook));
  };

  return <button onClick={handleAdd}>Add Book</button>;
}
```

You cannot call `addBook(newBook)` alone — you must wrap it in `dispatch(...)`. Think of `dispatch` as the postal service: you give it your letter (the action), and it delivers it to the correct Reducer.

---

### 4.6 Full Redux Example

Here is a complete counter app using Redux Toolkit:

```jsx
// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, addByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

```jsx
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

```jsx
// main.jsx
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

```jsx
// components/Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addByAmount, reset } from '../store/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(addByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
```

**The complete Redux flow:**
1. User clicks "+1"
2. `dispatch(increment())` sends the action `{ type: "counter/increment" }` to the store
3. The store passes it to `counterReducer`
4. Immer creates a draft, `state.value += 1` runs, a new state object is returned
5. The store updates to `{ counter: { value: 1 } }`
6. `useSelector` detects the change → `Counter` re-renders with `count = 1`

---

## 5. Context API vs Redux

| Feature | Context API | Redux (Toolkit) |
|---|---|---|
| Setup complexity | Simple | More boilerplate |
| Best for | Themes, auth, small/medium apps | Complex apps with many state changes |
| Data flow | Direct (component ↔ context) | Strict (action → reducer → store) |
| Debugging | Basic | Excellent (Redux DevTools) |
| Multiple stores | Yes (multiple contexts) | One store with slices |
| Performance | Can cause unnecessary re-renders | More optimized by default |

**Simple rule of thumb:**
- Use **Context API** when you need to share data across a few components (theme, user info, language)
- Use **Redux** when many parts of your app change the same data, or when you need time-travel debugging and predictable state management

---

## 6. Key Takeaways

**Context API:**
- `createContext()` creates an empty channel — no data, just an identity
- The Provider fills that channel with live data via `useState`
- Any component inside the Provider can read *and* update data using `useContext`
- Wrap `<App />` in `main.jsx` to make data globally available
- Pass both data *and* setter functions in the `value` prop to enable updates

**Redux:**
- One single store for the whole app — organized into slices
- Components can never modify state directly — they must dispatch actions
- `createSlice` bundles name + initialState + reducer functions in one place
- Immer lets you write simple mutation-style code while staying safe
- `useSelector` reads data; `useDispatch` sends actions
- Always export: actions (for components) and reducer (for the store)

---

## 7. Common Pitfalls

| Pitfall | Problem | Fix |
|---|---|---|
| Using context outside a Provider | Returns `null`, causes crashes | Wrap the component tree in the Provider |
| Mutating state in Redux outside createSlice | React won't detect the change | Only mutate inside createSlice reducer functions |
| Wrong `initialState` type | `.map()` on a string crashes the app | Match type to usage: `[]` for lists, `''` for strings, `0` for numbers |
| Mismatched key names | `state.library` works but `state.books` is undefined | Keep `configureStore` key and slice `name` consistent |
| Passing a new object/function as a prop with `memo` | Re-renders anyway due to new reference | Use `useMemo`/`useCallback` for stable references |
| Forgetting to wrap app with Redux `<Provider>` | Hooks throw errors | Add `<Provider store={store}>` in `main.jsx` |

---

## 8. Practice Ideas

1. **Theme Switcher** — Build a dark/light mode toggle using Context API. Every component should read the theme from context and apply appropriate styles.

2. **Shopping Cart** — Create a `CartContext` that stores items, total price, and functions to add/remove items. Display the count in a Navbar.

3. **Counter App with Redux** — Build a counter with increment, decrement, reset, and "add by custom amount" buttons. Use `createSlice` and both `useSelector`/`useDispatch`.

4. **Book Library** — Use Redux to manage a list of books. Add features: add a book, remove a book, search/filter by title. Practice `useSelector` with filtered data.

5. **Auth Context** — Create a simple `AuthContext` that tracks whether a user is "logged in." Show different UI in the Navbar based on login state. Practice passing both state and functions through context.

---

*Happy coding! Remember: understanding the data flow is more important than memorizing syntax. Once the mental model clicks — create, provide, consume — everything else follows.*