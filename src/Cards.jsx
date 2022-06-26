let card = [ {
    id: 0,
    title: "Mirage Inn & Suites",
    img: "https://lh5.googleusercontent.com/proxy/0ldOtdRQ6j9BAxNO8xM5uTkwzZS63WlpS8vLMRP-Wn4NJ0t2jTBGarqP52tnbpAAh40rfjmP4c3LR4k2jCVYVulb3BptCJci90vja3jtzjpGsOdHU74_A_m8xjtwuSKrUaXQmpJdZToSqsrxTGE3ueFdl_WUtg=w408-h271-k-no",
    text: "Good Place"

},
{
    id: 1,
    title: "Rodeway Inn",
    background: "rgba(255, 192, 203, 0.2)",
    img: "https://lh5.googleusercontent.com/p/AF1QipN9iFbnWQJrUaQONd3zAAD7MueK5kQWilfz_Dwv=w408-h272-k-no",
    text: "Comfortable"
}

];
let count = card.length

export function Cards(){
    return(
        <div id="cardPlace">
            <h1>Places</h1>
            <div className="countNotes">Find {count} Places</div>
            {card.map(function(card){
                return (
                    <div className="card">
                        <img src={card.img} alt="" />
                    <div className="card-text">
                        <h2 key={card.id}>
                            {card.title} 
                        </h2> 
                        <p>
                            {card.text}
                        </p>
                    </div>
                    
                    </div>
                )
            })}
        </div>
    )
}