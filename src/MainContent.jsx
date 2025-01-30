import "./maincontent.css"
import headerWithText from "./headerWithText"
import { useNavigate } from "react-router-dom"

const headerWithTextEl = headerWithText.map((obj)=>{
    return (
        <div className="header-with-text" key={headerWithText.indexOf(obj)}>
            <h1>{obj.header}</h1>
            <p>{obj.text}</p>
        </div>
    )
}) 



export default function MainContent(){
    const navigate = useNavigate();
    return(
        <>
        <div className="main-content-el">
            <img className="logo-image" src="image.png"></img>
            
            <button onClick={()=>{navigate("/questions")}} className="calc-btn">Calculate Footprint ►</button>
            
            



            {headerWithTextEl}
        </div>
        </>
    )
}

