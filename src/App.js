import React from 'react'
import './App.css';
import BasicForm from './BasicForm';
import Comp1 from './usecontext/Comp1';
import UseEffect from './UseEffect';



import UseReducer from './UseReducer';
import UseState from './UseState';


function App() {
  return (
    <div className='demo'>
       {/* <BasicForm /> */}
       <UseReducer />
       {/* <Comp1 /> */}
       {/* <UseState /> */}
       {/* <UseEffect /> */}
      
    </div>
  );
}

export default App;
