export default [
    {
        id:1,

        question:"What's your average monthly electric bill(in $)",
        type:"range",
        lower:0,
        upper:250,
        average:125
    },
    {
        id:2,

        question:"What's your average monthly gas bill (in $)",
        type:"range",
        lower:0,
        upper:250,
        average:125
    },
    {
        id:3,

        question:"What's your monthly oil bill (in $)",
        type:"range",
        lower:0,
        upper:300,
        average:150
    },
    {
        id:4,

        question:"What's your total yearly mileage on your car?",
        type:"range",
        lower:1000,
        upper:60000,
        average:30000
    },
    {
        id:5,

        question:"How many flights did you take in the past year that lasted 4 hours or less?",
        type:"range",
        lower:0,
        upper:24,
        average:12
    },
    {
        id:6,

        question:"How many flights did you take in the past year that lasted more than 4 hours?",
        type:"range",
        lower:0,
        upper:12,
        average:6
    }
]