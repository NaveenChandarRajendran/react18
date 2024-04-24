import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../slice/reviewSlice';

const Counter = () => {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({
            type: increment

        })
    }

    return <>
        <h1>Counter {value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>

        <button onClick={() => {
            dispatch({ type: incrementBy, payload: 2 })
        }}>doubleIt</button>
    </>
}

export default Counter;