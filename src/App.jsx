import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})
const isdurationValid=userInput.duration>0
const handleChange=(input,newValue)=>{
    setUserInput((prev)=>{
        return{
            ...prev,
            [input]:+newValue
        }
    })
}

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} handleChange={handleChange}/>
      {!isdurationValid && <p className='center'>Please Enter duration greater than zero!</p>}
      {isdurationValid && <Results input={userInput}/>}
      

    </>
  )
}

export default App
