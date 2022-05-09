import React, {} from 'react'
const initialState = 0;

const UseReducer = () => {
    const reducer = (state, action) => {
        if(type.action == "INCREMENT")
        {
            return state + 1
        }
        if(type.action == "DECREMENT")
        {
            return state - 1
        }
        
        return state
        
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Inc</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Dec</button>
    </div>
  )
}

export default UseReducer
