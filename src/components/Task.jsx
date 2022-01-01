const Task = ({ taskName, done, todoList, setTodoList, task }) => {
  // handles changing the task's done status
  const completeTaskHandler = () => {
    setTodoList(
      todoList.map((taskTodo) => {
        if (taskTodo.id === task.id) {
          return {
            ...taskTodo,
            done: !taskTodo.done,
          };
        }
        return taskTodo;
      })
    );
  };

  // removes the delete task from the todo list
  const deleteTaskHandler = () => {
    setTodoList(todoList.filter((taskTodo) => taskTodo.id !== task.id));
  };

  return (
    <div className='task-container'>
      <li className={`task-list-item ${task.done ? 'done' : 'undone'}`}> {taskName}</li>
      <button onClick={completeTaskHandler} className='btn btn-primary'>
        <i className='fas fa-check fa-xs'></i>
      </button>
      <button onClick={deleteTaskHandler} className='btn btn-danger'>
        <i className='fas fa-minus'></i>
      </button>
    </div>
  );
};

export default Task;
