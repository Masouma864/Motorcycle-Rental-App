/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createMotorcycleReducer from './motorcycle/motorcycle';
import deleteMotorcycleReducer from './deletemotorcycle/deletemotorcycle';
import { authReducer } from './auth/auth';
import { motorcyclesReducer } from './motorcycles/motorcycles';
import reservationReducer from './reservations/reservation';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
  newmotorcycle: createMotorcycleReducer,
  auth: authReducer,
  delete: deleteMotorcycleReducer,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
