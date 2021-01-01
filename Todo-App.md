[Reset the Input field After Submit](#Reset-the-Input-field-After-Submit)

# Todo App - Part 1

1. Create App

   ```terminal
   npx create-react-app todoapp
   npm start
   ```

2. Add materialize CDN to _public/index.html_

   https://materializecss.com/getting-started.html

3. Define App component state

   **App.js**

   ```js
   state = {
     todos: [
       { id: 1, content: 'first content goes here' },
       { id: 2, content: 'second content goes here' },
     ],
   };
   ```

4. Create a functional component to render the individual todos.

   **Todos.js**

   ```js
   const todos = () => {
     return <div className='todos'></div>;
   };
   ```

5. Later import and nest Todos in App component.

   **App.js**

   ```js
   import Todos from './Todos';

   return (
     <div className='App'>
       <Todos todos={this.state.todos} />
     </div>
   );
   ```

6. Next get this props passed in Todos component. Use map to iterate thru each todo and render them in template. and o/p the _todoList_ array.

   **Todos.js**

   ```js
   const Todos = ({ todos }) => {
     const todoList = todos.length ? (
       todos.map((todo) => {
         return (
           <div className='collection-item' key={todo.id}>
             <span>{todo.content}</span>
           </div>
         );
       })
     ) : (
       <p className='center'>No Todo's Added</p>
     );
     return <div className='todos collection'>{todoList}</div>;
   };
   ```

7. Deleting Todos

   **App.js**

   ```js
   deleteTodo = (id) => {
     let todos = this.state.todos.filter((todo) => {
       return todo.id !== id;
     });
     this.setState({
       todos,
     });
   };

   <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />;
   ```

   **Todos.js**

   ```js
   <div className='collection-item' key={todo.id}>
     <span
       onClick={() => {
         deleteTodo(todo.id);
       }}
     >
       {todo.content}
     </span>
   </div>
   ```

---

# Todo App - Part 2

1. Creating form to add new todo. here v need to store the data user types in input field to a state. So we use class based component.

   **AddTodo.js**

   ```js
   export default class AddTodo extends Component {
     state = {
       todos: {
         content: null,
       },
     };
     todoEntry = (e) => {
       this.setState({ [e.target.id]: e.target.value });
     };
     formSubmit = (e) => {
       e.preventDefault();
       this.props.addTodo(this.state);
     };
     render() {
       return (
         <div>
           <form onSubmit={this.formSubmit}>
             <label htmlFor='content'>Content: </label>
             <input
               type='text'
               name='content'
               id='content'
               onChange={this.todoEntry}
             />
           </form>
         </div>
       );
     }
   }
   ```

   **App.js**

   ```js
   addTodo = (todo, minimum = 10, maximum = 100) => {
     todo.id = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
     let todos = [...this.state.todos, todo];
     this.setState({
       todos,
     });
   };
   <AddTodo addTodo={this.addTodo} />;
   ```

## Reset the Input field After Submit

- Set state to empty on form submit function in _AddTodo.js_

**AddTodo.js**

```js
formSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state);
  this.setState({
    content: '',
  });
};
```

- But this doesn't removes input after submitting. But v reset the state to an empty value in _AddTodo_ component.
- So now we can set the value of input field direclty to the state. like below

```html
<form onSubmit="{this.formSubmit}">
  <label htmlFor="content">Add Todo: </label>
  <input
    type="text"
    name="content"
    id="content"
    onChange="{this.todoEntry}"
    value="{this.state.content}"
  />
</form>
```

- Now when the state is empty, value also empties as well.

[Stack Overflow](https://stackoverflow.com/a/46539556)

---
