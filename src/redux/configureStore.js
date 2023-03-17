import { configureStore } from '@reduxjs/toolkit';
import createMotorcycleReducer from './motorcycle/motorcycle';
import deleteMotorcycleReducer from './deletemotorcycle/deletemotorcycle';
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