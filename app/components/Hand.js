export default function Hand({ cardHand }) {
    return(
        <div className="flex items-center">
            { cardHand ? cardHand.map((card,i) => <img key={ i } src={ card.image } alt="Card" className="w-24" />) : <h1>LOADING</h1>}
        </div>
    )
}