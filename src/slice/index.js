import { combineSlices } from '@reduxjs/toolkit';
import CounterReducer from './reviewSlice';
import postReducer from './postSlice';

export const rootReducer = combineSlices(
    {
        counter: CounterReducer,
        posts: postReducer
    }
)