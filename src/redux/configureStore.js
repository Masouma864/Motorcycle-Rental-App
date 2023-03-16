import { configureStore } from '@reduxjs/toolkit';
import { createMotorcycle } from './motorcycle/motorcycle';

export default configureStore({
    reducer: {
        newMotorcycle: createMotorcycle,
    },
});