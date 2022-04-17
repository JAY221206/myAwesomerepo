import React from 'react'
import { BioData } from './Comp1'

const Comp4 = () => {
 
  return (
    <BioData.Consumer>{(lastName)=> {
      return <h1>Amitabh  {lastName}</h1>
    }}</BioData.Consumer>
  ) 
}

export default Comp4