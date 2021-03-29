import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../features/appslice';

export default configureStore({
    reducer: {
        app: appReducer,
    },
});