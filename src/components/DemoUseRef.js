import React, {useRef} from 'react'

function DemoUseRef() {
    const inputElement = useRef()

    const focusInput = () => {
            inputElement.current.focus();
    }
  return (
    <div>DemoUseRef

        <input type='text' ref = {inputElement} />

        <button onClick={focusInput}> Submit</button>

    </div>
  )
}

export default DemoUseRef