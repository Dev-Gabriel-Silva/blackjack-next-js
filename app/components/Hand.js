export default function Hand({ hand }) {
    return(
        <div className="flex items-center">
            {hand ? hand.cards.map((card,i) => <img key={ i } src={ card.image } alt="Card" className="w-24" />) : <h1>LOADING</h1>}
        </div>
    )
}