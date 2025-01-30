import "./maincontent.css"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Output(){

    const [searchParams] = useSearchParams()
    const answer = searchParams.get(0)

    let answers = []
    
    answers = (answer.split('?'))
   
    console.log(answers)
    for(let i=1;i<6;i++){
        answers[i]=Number(answers[i].split('=')[1])
    }

    const output = Number(answers[0])*105+answers[1]*105+answers[2]*113+answers[3]*0.79+answers[4]*1100+answers[5]*4400;
    let outputTxt = ""

    if(output<6000){
        outputTxt +="You’re an eco-champion! To maintain or improve your status: Continue with energy-efficient and sustainable habits.Advocate for sustainability within your community or workplace.Support environmental causes and green businesses. Offset emissions through carbon credits or planting trees. "
    } else if( output<16000){
        outputTxt +="You’re already doing a great job! Here are some additional ways to reduce your impact:Use renewable energy sources for your home (solar, wind, etc.).Opt for public transportation or carpooling more frequently.Minimize waste through better recycling and composting.Support sustainable brands and businesses.Consider eating more plant-based meals to further reduce emissions from food production."
    } else if (output<22000){
        outputTxt+="You’re in the average range, but there’s room to improve! Here are some suggestions to reduce your impact:Switch to electric vehicles (EVs) or hybrid cars.Reduce unnecessary flights and consider alternative travel options.Install better insulation in your home to reduce heating/cooling energy consumption.Go zero-waste by minimizing single-use plastics and packaging.Upgrade to energy-efficient appliances and lighting in your home."
    } else {
        outputTxt+="Reduce air travel: Consider alternatives like train travel or video calls.Shift to a more energy-efficient home: Implement smart thermostats, LED lighting, and better insulation.Switch to a low-carbon diet: Consume less meat, dairy, and processed foods, which have a higher environmental impact.Embrace electric or hybrid cars and avoid high-emission vehicles.Adopt sustainable lifestyle practices, like reducing waste and supporting green companies."
    }
        return(
        <>
        <div className="output-content-el">
            <h1 className="header">Your Carbon Footprint is: </h1>

            <h1 className="header">{output}</h1>

            <Link to="/about-carbon-foot">
             <a className="header">What does your carbon footprint say about you?</a>
            </Link>
            

            <h3 className="paragraph">
                {outputTxt}
            </h3>
        </div>
            
        </>
    )

}