import { configureStore } from '@reduxjs/toolkit';
import createMotorcycleReducer from '../components/motorcycle/motorcycle';
import deleteMotorcycleReducer from '../components/deleteMotorcycle/deletemotorcycle';

export default configureStore({
    reducer: {
        newMotorcycle: createMotorcycleReducer,
        delete:deleteMotorcycleReducer,
    },
});