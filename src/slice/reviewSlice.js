import { createSlice } from '@reduxjs/toolkit';


//initalState
const initialState = {
    value: 10
}
const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        //apis
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }

    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions;
const CounterReducer = counterSlice.reducer;
export default CounterReducer;