import { configureStore } from '@reduxjs/toolkit';
import createMotorcycleReducer from './motorcycle/motorcycle';
import deleteMotorcycleReducer from './deletemotorcycle/deletemotorcycle';
import reservationReducer from './reservations/reservation';
import { authReducer } from './auth/auth';
import { motorcyclesReducer } from './motorcylces/motorcycles';

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
