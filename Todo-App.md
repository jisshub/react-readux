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



