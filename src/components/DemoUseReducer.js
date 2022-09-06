import React,{useReducer} from 'react'

const intialState = 0
const myReducer = (state, action) => {
    switch(action){ 
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset':
            return intialState            
        default :
        return state
    }
}
function DemoUseReducer() {    
  
    const[count, dispatch] = useReducer(myReducer, intialState)       

  return (
    <div>DemoUseReducer

            <h2> count : {count}</h2><br></br>
            <button onClick={() => dispatch('increment')}>INC</button> <br></br>
            <button onClick={() => dispatch('decrement')}>DEC</button><br></br>
            <button onClick={() => dispatch('reset')}>Reset</button><br></br>


    </div>
  )
}

export default DemoUseReducer