import "./maincontent.css"
import { useState } from "react"

import questions from "./questions.js"

import { useNavigate } from "react-router-dom"






export default function QuestionContainer(){

    const navigate = useNavigate()

    const questionsEl = questions.map((obj)=>{
        let [number,setNumber] = useState(obj.average)
        return (
            <div className="question" key={obj.question}>
                <h2 className="question-el">{obj.question}</h2>
                <input
                name={obj.id}
                id={obj.id}
                onChange={()=>{setNumber(document.getElementById(obj.id).value)}}
                min={obj.lower} 
                max={obj.upper} 
                className="input-ans-for-question" 
                type={obj.type}></input>
                <h2>{number}</h2>
            </div>
            
        )
    })

    function handleSubmit(formData){
        let answers = []
        let string = "/output?"
        for (let i in questions){
            answers.push(Number(formData.get(Number(i)+1)))
            string+=(String(i)+"="+String(answers[i])+(i!=6?"?":""))
        }
        console.log(string)
        navigate(string)
    }
    

    return(
        <>
            <div className="question-content-el">
                <h3 className="header-text">Answer the Following Questions to analyze your carbon footprint: </h3>
                <form name="question-form" action={handleSubmit}>
                    {questionsEl}
                    <button id="submit" className="calc-btn submit-btn">Submit</button>
                </form>
                
                
            </div>
            
        </>
    )
}