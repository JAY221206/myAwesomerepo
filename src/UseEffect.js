import React, {useState, useEffect} from 'react'

const UseEffect = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width)

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
    console.log(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", actualWidth)

    return() => {
      window.removeEventListener("resize", actualWidth)
    }
   
  })
  

  return (
    <div>
      <p>the actual size of window</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect