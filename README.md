React Context

Context allows you to share data throughout your component tree without having to pass it through the props from entry level.

This can be helpful when you have data, like the current user, that is used for many components and you consider to be global for a tree of your components. By using Context, you can create data stores that hold a ‘global application state’ and use that data where you need it without the use of props.

If your sole purpose of using a state management tool is to avoid prop drilling, then Context might be a solution for you.

Caution: Applying Context can make reusing components difficult. React docs suggest component composition (https://reactjs.org/docs/composition-vs-inheritance.html) can be used as a solution to passing props through many levels.

This tutorial gives a good explanation of Context and I used this example in my repo: https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87

Two components you’ll have to create:
* Context provider → provides the state and some functions that manipulates the state
* Context consumer → use this wherever you need to access data from your store
