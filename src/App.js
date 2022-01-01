import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useEffect, useState } from 'react';

function App() {
  // hook for setting state of task text
  const [taskText, setTaskText] = useState('');
  // hook for setting state of todo list
  const [todoList, setTodoList] = useState([]);

  // get the todo list from local storage
  const getLocalTodo = () => {
    // if there is none, return an empty array
    if (window.localStorage.getItem('localTodoList') === null) {
      window.localStorage.setItem('localTodoList', JSON.stringify([]));
      // otherwise, get from local storage and set the state to the saved state
    } else {
      const currentTodoList = JSON.parse(window.localStorage.getItem('localTodoList'));
      setTodoList(currentTodoList);
    }
  };

  const setLocalTodo = () => {
    window.localStorage.setItem('localTodoList', JSON.stringify(todoList));
  };

  // get the todo list once on refresh
  useEffect(() => {
    getLocalTodo();
  }, []);

  // set the local todo list every time the todo list changes
  useEffect(() => {
    setLocalTodo();
  }, 
  //eslint-disable-next-line
  [todoList]);

  return (
    <div className='App'>
      <header>Simple Todo List</header>
      <Form setTaskText={setTaskText} taskText={taskText} setTodoList={setTodoList} todoList={todoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
