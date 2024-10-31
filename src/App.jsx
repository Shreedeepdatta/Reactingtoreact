import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue=() => {
    if(count==20){
      return
    }
    count=count+1
    setCount(count)
  }
  const removevalue=()=>{
    if(count==0)
      return
    count=count-1
    setCount(count)
  }
  
  return (
    <>
      <h1>Chai aur code the GOAT</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br/>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
