import react from 'react';
import { Button, Form } from 'react-bootstrap';

/* Define add new todo item form component */
const FormTodo = (props) => {
    const [value, setValue] = react.useState("");
    
    /* Handle submission of new todo item form */
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      props.addPreloadedTodo(value);
      setValue("");
    };
  
    /* Render new todo item form component */
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  
  
export default FormTodo