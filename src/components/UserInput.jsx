import { useState } from "react"
export default function UserInput({userInput,handleChange}){

    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInput.initialInvestment}type="number"onChange={(event)=>{
                        handleChange('initialInvestment',event.target.value)}} />
                </p>
                <p>
                <label htmlFor="">AnnualInvestment</label>
                <input value={userInput.annualInvestment}type="number"onChange={(event)=>{handleChange('annualInvestment',event.target.value)}} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input value={userInput.expectedReturn}type="number"onChange={(event)=>{handleChange('expectedReturn',event.target.value)}} />
                </p>
                <p>
                <label htmlFor="">Duartion</label>
                <input value={userInput.duration}type="number"onChange={(event)=>{handleChange('duration',event.target.value)}} />
                </p>
            </div>
        </section>
    )
}