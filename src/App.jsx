import Navbar from "./Navbar.jsx"
import MainContent from "./MainContent.jsx"
import AboutCarbonFootprint from "./aboutcarbonfoot.jsx"
import QuestionContainer from "./QuestionContainer.jsx"
import Output from "./output.jsx"
import Footer from "./footer.jsx"
import AboutUs from "./aboutus.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App(){
    return (<>
            <Navbar/>
            <Placeholder></Placeholder>            
            <Footer/>
    </>)
}

function Placeholder(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<MainContent/>}></Route>
            <Route path="/questions" element={<QuestionContainer/>}></Route>
            <Route path="/about-us" element={<aboutus/>}></Route>
            <Route path="/about-carbon-foot" element={<AboutCarbonFootprint/>}></Route>
            <Route path="/output" element={<Output/>}></Route>
            </Routes>
                
        </Router>
    )
}