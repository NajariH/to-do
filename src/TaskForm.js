import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/todoActions';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        dispatch(addTask({ title }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nouvelle tâche"
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;
