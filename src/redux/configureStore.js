import { configureStore } from '@reduxjs/toolkit';
import createMotorcycleReducer from '../components/motorcycle/motorcycle';
import deleteMotorcycleReducer from '../components/deleteMotorcycle/deletemotorcycle';
import reservationReducer from './reservations/reservation';
import { authReducer } from './auth/auth';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};


export default configureStore({
    reducer: {
        newMotorcycle: createMotorcycleReducer,
        delete:deleteMotorcycleReducer,
        preloadedState: initialState,
        reservation:reservationReducer
    },
});