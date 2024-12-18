import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
    dispatch({ type: 'FETCH_TASKS_REQUEST' });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
    }
};

// Ajoutez des actions pour ajouter, mettre à jour et supprimer des tâches.
export const addTask = (task) => async (dispatch) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
        dispatch({ type: 'ADD_TASK_SUCCESS', payload: response.data });
        // Optionnel : Récupérer à nouveau les tâches après ajout
        dispatch(fetchTasks());
    } catch (error) {
        console.error(error);
        // Gérer l'erreur ici si nécessaire
    }
};
export const updateTask = (task) => async (dispatch) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
        // Optionnel : Récupérer à nouveau les tâches après mise à jour
        dispatch(fetchTasks());
    } catch (error) {
        console.error(error);
        // Gérer l'erreur ici si nécessaire
    }
};
export const deleteTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
        // Optionnel : Récupérer à nouveau les tâches après suppression
        dispatch(fetchTasks());
    } catch (error) {
        console.error(error);
        // Gérer l'erreur ici si nécessaire
    }
};
