import react from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreloadedToDoItems from './components/PreloadedToDoItems'
import FormTodo from './components/FormTodo'
import preloadedTodosData from './components/data';
import Todo from './components/Todo'


function App() {

  /* Setup immutable component state for todo list */
  const [todos, setTodos] = react.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  /* Setup immutable component state for preloaded-todo list to choose from (with initial state loaded from data.js) */
  const [preloadedTodos, setPreloadedTodos] = react.useState(preloadedTodosData);

  /* Update preloaded-todo list state (add new item to choose from list) */
  const addPreloadedTodo = text => {
    const newPreloadedTodos = [...preloadedTodos, { text }];
    setPreloadedTodos(newPreloadedTodos);
  };

  /* Update todo list state (add new item) */
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  /* Update todo list state (mark item as done) */
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  
  /* Update todo list state (remove item) */
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  /* Map preloaded todo list items to PreloadedTodoItems component */
  const preLoadedTodoItems = preloadedTodos.map((item,index) => <PreloadedToDoItems key={index} item={item} addTodo={addTodo}/>)

  /* Render our react app & all components */
 return (
  <div className="container">
    <FormTodo addPreloadedTodo={addPreloadedTodo} />
      <div className="row">
        <div className="col">
            <p>Preloaded Todo Items (click to add to todo list)</p>
            {preLoadedTodoItems}
        </div>
        <div className="col">
            <h1 className="text-center mb-4">Pending Todo List</h1>
            <div>
              {todos.map((todo, index) => (
                <Card bg={todo.isDone === true ? 'secondary' : ''} key={index}>
                  <Card.Body>
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
              ))}
            </div>
        </div>
      </div>

  </div>
 );
}

export default App;
