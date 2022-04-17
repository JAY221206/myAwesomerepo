import React from 'react'

const UseState = () => {
    const [myObject, setMyObject] = React.useState({
        myName:"jayhind", myAge:24, myDegree:"B-Tech"
    })

     const changeObject = () => {
         setMyObject({ myName:"Vikas singh" })
     }

  return (
    <div>
        <h1>name: {myObject.myName} age: {myObject.myAge} degree: {myObject.myDegree}</h1>
        <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseState