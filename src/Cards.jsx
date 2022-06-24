let card = [ {
    id: 0,
    title: "Title Array",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/7cf358b9-e8c5-4067-9ac5-014784387e22.jpeg?im_w=720",
    text: "Good Place"

},
{
    id: 1,
    title: "Title Ex",
    background: "rgba(255, 192, 203, 0.2)",
    img: "https://a0.muscache.com/im/pictures/afd60c19-8f7f-4955-8f23-c457d132a8c4.jpg?im_w=720",
    text: "Text Ex"
},
{
    id: 2,
    title: "Title Ex",
    background: "rgba(255, 192, 203, 0.2)",
    img: "https://a0.muscache.com/im/pictures/afd60c19-8f7f-4955-8f23-c457d132a8c4.jpg?im_w=720",
    text: "Text Ex"
},
{
    id: 3,
    title: "Title Ex",
    background: "rgba(255, 192, 203, 0.2)",
    img: "https://a0.muscache.com/im/pictures/afd60c19-8f7f-4955-8f23-c457d132a8c4.jpg?im_w=720",
    text: "Text Ex"
}
];
let count = card.length

export function Cards(){
    return(
        <div id="cardPlace">
            <div class="countNotes">Find {count} Places</div>
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