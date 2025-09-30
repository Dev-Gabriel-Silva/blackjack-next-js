import Hand from './Hand'
import Score from './Score'
export default function Game({ cardHand, setCardHand, decks}) {

    async function drawNewCard() {
        const { deck_id } = decks;
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${ deck_id }/draw/?count=${1}`); // Request draw 2 cards, default on Blackjack
        const data = await response.json(); // Converte a resposta para json
        setCardHand((prevList) => [...prevList, data.cards[0]]); // Salva o estado da mão
    }


    return(
        <div className='flex flex-col items-center justify-center h-dvh w-dvw'>
            <Score cardHand={ cardHand } />
            <Hand cardHand={ cardHand } />
            <button
                className='border border-black m-12 p-2 bg-blue-500 hover:bg-blue-800 text-white'
                onClick={ () => drawNewCard() }
            >Draw</button>
        </div>
    )
}