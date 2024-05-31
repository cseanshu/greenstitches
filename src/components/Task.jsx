import React from 'react';

const Task = ({ name, task, onMove, onDragStart }) => {
  const { title, description, timestamp } = task;
  console.log(task);

  return (
    <div
      className="p-4 bg-white shadow-md rounded mb-4 bg-opacity-50
       backdrop-blur-md border border-gray-200 cursor-move"
      draggable
      onDragStart={(e) => onDragStart(e, task, name)}
      style={{
        backgroundColor: 'rgba(207, 196, 196, 0.2)', // light background color with opacity
        backdropFilter: 'blur(10px)', // blur effect
      }}
    >
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <input type="checkbox" className="h-5 w-5 text-blue-300 rounded border-gray-300 focus:ring-blue-300" />
        {description && <p className="ml-2">{description}</p>}
      </div>
      {name === 'Completed' && <p className="text-gray-500 text-sm">{timestamp}</p>}
      <button
        onClick={onMove}
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
      >
        {name === 'Completed' ? 'Completed' : 'Move'}
      </button>
    </div>
  );
};

export default Task;
