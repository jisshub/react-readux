const Todos = ({todos}) => {
    const todoList = todos.length ? todos.map(todo => {
        return (
         <div className='todos collection' key={todo.id}>
            <div>Content: {todo.content}</div>
        </div> 
        );
    }): (<p>No Todo's Added</p>);
    return(
        <div>{todoList}</div>
    )
}
 
export default Todos;