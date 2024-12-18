import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions/todoActions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleUpdate = () => {
        const newTitle = prompt("Modifier la tâche :", task.title);
        if (newTitle) {
            dispatch(updateTask({ ...task, title: newTitle }));
        }
    };

    return (
        <li>
            <span>{task.title}</span>
            <button onClick={handleUpdate}>Modifier</button>
            <button onClick={handleDelete}>Supprimer</button>
        </li>
    );
};

export default TaskItem;
