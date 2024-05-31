import React from 'react';
import Task from './Task';
import '../App.css';
const Column = ({ name, title, tasks, onMoveTask, onDrop, addTaskComponent }) => {
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("sourceColumn", name);
  };

  return (
    <div
      className="md:w-1/3 p-4 bg-slate-200 mr-1 h-min:[60vh] bg-opacity-50 
      backdrop-blur-md border border-gray-200 rounded-lg shadow-lg mobile__column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // light background color with opacity
        backdropFilter: 'blur(10px)', // blur effect
      }}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} name={name} task={task} onMove={() => onMoveTask(task.id)} onDragStart={handleDragStart} />
      ))}
      {name === 'Pending' && addTaskComponent}
    </div>
  );
};

export default Column;
