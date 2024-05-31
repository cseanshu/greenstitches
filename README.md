# Dragable Todo

The To-Do Draggable List is a web- application designed to enhance task management by providing a user-friendly interface where users can create, update, and organize tasks through a movable button and extra drag-and-drop functionality. The application is built using React, ensuring a seamless and interactive user experience.


## TechStack used
1. Frontend: React, Tailwind CSS for styling. 
2. State Management: React useState, useEffect hooks.
3. Date Handling: JavaScript Date object for timestamping completed tasks.
3. Draggable Feature: HTML5 drag-and-drop API.
## Setup project
1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies using npm install.
4. Start the development server using npm start.
5. Open the application in your browser at http://localhost:3000.
## Deployed Link of the Project:
     https://anshumandragabletodo.netlify.app/
## Screenshots
1. for the Large devives:- https://drive.google.com/file/d/14tUBKRGT0HLpSbWb4XDZr3KRYZPM7m2_/view?usp=sharing
2. for the medium devices:- https://drive.google.com/file/d/1PYlpX0KwcfsPHlWLs41upAyikJL3G12T/view?usp=sharing
3. for the mobile devices:- https://drive.google.com/file/d/1PYlpX0KwcfsPHlWLs41upAyikJL3G12T/view?usp=sharing
## Components
1.  ToDoList:- The main component managing the state of tasks and rendering the three columns for task statuses.
2. Column:- A component representing each status column (Pending, In Progress, Completed) that holds the tasks and handles drag-and-drop events.
3. Task:- A component representing an individual task card, draggable across columns and displaying task details.
## Implementation/Documentation
1. Task State Management: The state of tasks is managed in the ToDoList component using the useState hook. Tasks are categorized based on their status.
2. Task Addition: Users can add tasks through a form that appears when they click the "+Create issue" button. The form includes fields for the task title and description.
3. Drag-and-Drop Handling: Tasks are made draggable using the HTML5 drag-and-drop API. The onDragStart event sets the task data, while the onDrop event handles the movement of tasks between columns and updates the task status.

4. Styling: Tailwind CSS is used for styling, with specific classes applied to implement a glassmorphism effect for a modern and visually appealing UI.

