import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../slice/reviewSlice';
import useTodos from '../reactquery/hooks/todos';

const Counter = () => {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({
            type: increment

        })
    }

    const { data, error, isLoading } = useTodos();
    console.log("data", data);
    console.log("isLoading", isLoading);
    console.log("error", error);
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