let card = [ {
    id: 0,
    title: "Amorino Gelato",
    img: "https://fastly.4sqi.net/img/general/600x600/452137879_Vo5SDxhhQ59M-8Oc6YeIE_GQ1mEOrTBm1Tj8BnaAGVQ.jpg",

    features: "Professionalism"
},
];
let count = card.length

export function IcePlaces(){
    return(
        <div className="cardPlace">
            <h1>Ice Cream Parlors</h1>
            <div className="countNotes">Find {count} Ice Cream Parlors</div>
            {card.map(function(card){
                return (
                        <div className="card">
                        <img src={card.img}/>
                    <div className="card-text">
                        <h2 key={card.id}>
                            {card.title} 
                        </h2> 
                        <ul>
                            <li>{card.features}</li>
                        </ul>
                    </div>
                    
                    </div>
                )
            })}
        </div>
    )
}