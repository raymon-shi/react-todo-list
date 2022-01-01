import Task from './Task';

const List = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((t) => (
        <Task key={t.id} taskName={t.task} done={t.done} task={t} setTodoList={setTodoList} todoList={todoList} />
      ))}
    </div>
  );
};

export default List;
