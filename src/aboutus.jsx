import "./maincontent.css"

const members = ["Karthik H", "Gokul K", "Mohammad Ishfaq", "Sidhinchandran C S", "Thushar Reginold"]

const membersEl = members.map((i)=>{
    return(
        <li key={members.indexOf(i)}>{i}</li>
    )
})

export default function AboutUs(){
    return(
        <>
            <div className="output-content-el">

                <h1>Tri State Tourists: </h1>
                <ul>
                    {membersEl}
                </ul>
            </div>
            
        </>
    )
}