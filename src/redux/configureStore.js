import { configureStore } from '@reduxjs/toolkit';
import createMotorcycleReducer from '../components/motorcycle/motorcycle';
import deleteMotorcycleReducer from '../components/deleteMotorcycle/deletemotorcycle';
import reservationReducer from './reservations/reservation';

export default configureStore({
    reducer: {
        newMotorcycle: createMotorcycleReducer,
        delete:deleteMotorcycleReducer,
        reservation:reservationReducer
    },
});