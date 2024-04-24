import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './slice/reviewSlice';

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

export default store;