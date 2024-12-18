import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/todoActions';
import TaskItem from './TaskItem';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Liste des Tâches</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
