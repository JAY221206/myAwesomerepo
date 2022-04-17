import React, {} from 'react'

const UseReducer = () => {

    const [state, dispatch] = useReducer(first, second, third)

  return (
    <div>
        <h1></h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Inc</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Dec</button>
    </div>
  )
}

export default UseReducer