import { useState } from 'react';
import { store } from './Redux/store' 


function Counter() {
    const {getState , dispatch,subscribe} = store;
       const [value ,setvalue] = useState(1)
       console.log(getState().counter);
    
       const handleAdd = () => {
        dispatch({type:"ADD" , payload:1})  
        console.log(getState().counter);
          
       }
    
       const handleSUB = () => {
        dispatch({type:"SUB" , payload:1})
        console.log(getState().counter);
       }
    
       subscribe(() => {
        setvalue((prev)=>prev+1)
       })
    
       
      return (
        <>
         
    
         <h2>{getState().counter}</h2>
         <button onClick={handleAdd}>Add</button>
         <button onClick={handleSUB}>Sub</button>
        </>
      )

    
}

export default Counter