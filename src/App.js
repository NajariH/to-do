import React from 'react';
import TaskList from './redux/actions/TaskList';
import TaskForm from './redux/actions/TaskForm';
/*import { fetchTasks, addTask, updateTask, deleteTask } from './redux/actions/todoActions';*/

function App() {
    return (
        <div className="App">
            <h1>Gestionnaire de Tâches</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
