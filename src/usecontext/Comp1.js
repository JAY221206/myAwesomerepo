import React, { createContext } from 'react'
import Comp2 from './Comp2'


const BioData = createContext();

const Comp1 = () => {
  return (
    <BioData.Provider value={"Bachchhan"}>
     <Comp2 />

    </BioData.Provider>
  )
}

export default Comp1
export {BioData}