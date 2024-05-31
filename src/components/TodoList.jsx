import React, { useEffect, useState } from 'react';
import Column from './Column';
import '../App.css';
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  //uses object for storing the input fields data
  const [todoData, setTodoData] = useState({
    title: '',
    description: ''
  });
  //this state is use to toggle the button 
  const [showInputFields, setShowInputFields] = useState(false);
    // function to add the Notes first in the Pending section/column
  const addTask = () => {
    if (todoData.title.trim() !== '') {
      const newTask = { id: Date.now(), title: todoData.title, description: todoData.description, status: 'Pending' };
      setTasks([...tasks, newTask]);
      setTodoData({ title: '', description: '' });
      setShowInputFields(false); // Hide the input fields after adding the task
    }
  };
    // this a function for the handling the input fields and then setting the data to the tasks array
  const handleTodoData = (e) => {
    setTodoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
    // conditionally render the button field and the input field
  const addTaskComponent = !showInputFields ? (
    <button
  onClick={() => setShowInputFields(true)}
  className="py-2 px-4 rounded mb-4 font-semibold hover:bg-green-400 hover:text-white flex items-center"
>
  <i className="fas fa-plus fa-lg"></i>Create issue
</button>
  ) : (
    <>
      <input
        type="text"
        className="border p-2 mb-2 w-full"
        placeholder="Task Title"
        name="title"
        value={todoData.title}
        onChange={handleTodoData}
      />
      <textarea
        className="border p-2 mb-2 w-full"
        placeholder="Task Description"
        name="description"
        value={todoData.description}
        onChange={handleTodoData}
      />
      <div className="flex">
        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          Save Task
        </button>
        <button
          onClick={() => setShowInputFields(false)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </>
  );
    //  created a array for the pending Task and the inprogress tasks and the completed tasks
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
    // when tasks changes then it renders and the provides the filtered results.
  useEffect(() => {
    setPendingTasks(tasks.filter((task) => task.status === 'Pending'));
    setInProgressTasks(tasks.filter((task) => task.status === 'In Progress'));
    setCompletedTasks(tasks.filter((task) => task.status === 'Completed'));
  }, [tasks]);
     // this function used to move the task
  const moveTask = (id, nextStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: nextStatus, timestamp: nextStatus === 'Completed' ? new Date().toLocaleString() : null } : task
      )
    );
  };
    // drag and drop functionality is implemented here
  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const sourceColumn = e.dataTransfer.getData("sourceColumn");
    if (targetColumn !== sourceColumn) {
      switch (targetColumn) {
        case "Pending":
          setPendingTasks([...pendingTasks, task]);
          break;
        case "In Progress":
          setInProgressTasks([...inProgressTasks, task]);
          break;
        case "Completed":
          setCompletedTasks([...completedTasks, task]);
          break;
        default:
          break;
      }
      switch (sourceColumn) {
        case "Pending":
          setPendingTasks(pendingTasks.filter((tsk) => tsk.id !== task.id));
          break;
        case "In Progress":
          setInProgressTasks(inProgressTasks.filter((tsk) => tsk.id !== task.id));
          break;
        case "Completed":
          setCompletedTasks(completedTasks.filter((tsk) => tsk.id !== task.id));
          break;
        default:
          break;
      }
      moveTask(task.id, targetColumn);
    }
  };

  return (
    <div className="container mx-auto p-8 h-full">
      <h1 className="text-3xl font-bold mb-8 text-center">📝To-Do Draggable Keeper 📝</h1>
      <div className="flex mobile__responsive">
        <Column
          name="Pending"
          title={`TO DO ${pendingTasks.length} ISSUE`}
          tasks={pendingTasks}
          onMoveTask={(id) => moveTask(id, 'In Progress')}
          onDrop={(e) => handleDrop(e, "Pending")}
          addTaskComponent={addTaskComponent}
        />
        <Column
          name="In Progress"
          title={`IN PROGRESS ${inProgressTasks.length} ISSUE`}
          tasks={inProgressTasks}
          onMoveTask={(id) => moveTask(id, 'Completed')}
          onDrop={(e) => handleDrop(e, "In Progress")}
        />
        <Column
          name="Completed"
          title={`DONE✅`}
          tasks={completedTasks}
          onMoveTask={() => {}}
          onDrop={(e) => handleDrop(e, "Completed")}
        />
      </div>
    </div>
  );
};

export default ToDoList;
