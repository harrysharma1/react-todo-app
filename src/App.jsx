import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/Todo';
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function editTask(id,newName){
    const editedTaskList=tasks.map((task)=>{
      if(id==task.id){
        return {...task,name:newName}
      }
      return task;
    });
    setTasks(editedTaskList);

  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
 
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  
  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask={addTask}  />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;