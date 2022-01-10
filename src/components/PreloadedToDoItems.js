
import { Button } from 'react-bootstrap';

/* Define preloaded todo list items component */
const PreloadedToDoItems = (props) => {
return (
    <div className="todo-item">
    <Button variant="outline-info" onClick={() => props.addTodo(props.item.text)}>{props.item.text}</Button>
     </div>
);

}

export default PreloadedToDoItems