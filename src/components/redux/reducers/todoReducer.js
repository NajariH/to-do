const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_TASKS_SUCCESS':
            return { ...state, loading: false, tasks: action.payload };
        case 'FETCH_TASKS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        // Ajoutez d'autres cas pour ADD, UPDATE et DELETE
        default:
            return state;
    }
};

export default todoReducer;
