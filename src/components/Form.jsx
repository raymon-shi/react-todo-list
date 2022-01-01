import { v4 as uuidv4 } from 'uuid';

const Form = ({ setTaskText, setTodoList, todoList, taskText }) => {
  // handles the task text
  const newTaskTextHandler = (event) => {
    setTaskText(event.target.value);
  };
  // adds another task item to the todo list with specificed keys
  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { task: taskText, done: false, id: uuidv4() }]);
    setTaskText('');
  };
  return (
    <form>
      <input
        value={taskText}
        onChange={newTaskTextHandler}
        type='text'
        name='input-task'
        id='input-task'
        autoComplete='off'
        placeholder='Enter your task here'
      />
      <button className='btn btn-success' onClick={buttonSubmitHandler} type='submit'>
        <i className='fas fa-plus'></i>
      </button>
    </form>
  );
};

export default Form;
