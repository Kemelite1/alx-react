# React Redux reducer+selector
In Redux, a **reducer** is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store. They are responsible for updating the state based on the action type. A basic example of a reducer:
```
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

While **Selector** are functions used to extract specific pieces of data from the Redux store. They provide an abstraction layer over the store structure, allowing components to access only the data they need. Selectors are typically used to compute derived state or to extract complex data transformations.
## Purpose of a Reducer and Its Role in the Application:
+ The purpose of a reducer in Redux is to specify how the application's state changes in response to actions dispatched to the Redux store.
+ Reducers are pure functions that take the current state and an action as input and return a new state without mutating the original state.
## Why a Reducer Should Stay as Pure as Possible:
+ Pure functions are functions that have no side effects and always return the same output for the same input.
+ Keeping reducers pure ensures predictability and testability of state changes in the application.
+ Pure reducers are easier to reason about and debug because they do not rely on external factors or have hidden dependencies.
## Why Mutations Should Not Happen Within a Reducer:
+ Mutating the state directly within a reducer violates the principle of immutability in Redux.
+ Redux relies on immutability to detect state changes efficiently and to maintain a predictable state tree.
+ Mutating the state directly could lead to unexpected behavior, bugs, and difficulties in tracking state changes.
## The Use of Immutable within the Reducer:
+ Immutable data structures ensure that data cannot be changed after it's created. This means creating new instances of data when updates are needed instead of modifying existing data.
+ Immutable.js is a popular library for working with immutable data structures in JavaScript.
+ Using immutable data within reducers ensures that state changes are predictable and can be tracked effectively by Redux.
# The Use of Normalizr within the App:
+ Normalizr is a library used to normalize nested JSON data according to a schema, making it easier to manage relational data in the Redux store.
+ It helps organize complex data structures and simplifies data retrieval and updates within the application.
+ Normalization reduces redundancy and improves performance when dealing with nested or relational data.