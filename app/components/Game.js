import { useEffect, useState } from 'react';
import Hand from './Hand'
import Score from './Score'

export default function Game({ cardHand, setCardHand, decks, setNewGame, isPlaying}) {
    const [ score, setScore ] = useState(0);
    const [ gameOver, setGameOver ] = useState(null);
    const [ lose, setLose ] = useState(null);
    const mensagem = <>ganhou</>;

    useEffect(()=>{
        if(score > 21) {
            setLose(true);
            setGameOver(true);
        }else if(score === 21){
            setLose(false);
            setGameOver(true);
        }
    },[score])


    function winOrLose() {
        if(score > 21) {
            return(
                <h1
                    className='text-red-600 text-2xl m-12'
                >YOU LOSE</h1>
            )
        }else if(score === 21) {
            return <h1 className='text-green-500 text-2xl m-12'>BIG POT 💰</h1>
        }
    }

    async function drawNewCard() {
        const { deck_id } = decks;
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${ deck_id }/draw/?count=${1}`); // Request draw 2 cards, default on Blackjack
        const data = await response.json(); // Converte a resposta para json
        setCardHand((prevList) => [...prevList, data.cards[0]]); // Salva o estado da mão
    }


    return(
        <div className='flex flex-col items-center justify-center h-dvh w-dvw'>
            {gameOver ? winOrLose() : <Score cardHand={ cardHand }  setNewGame={ setNewGame } score={ score } setScore={setScore}/>}
            <Hand cardHand={ cardHand } />
            <button
                className='border border-black m-12 p-2 bg-blue-500 hover:bg-blue-800 text-white'
                onClick={ () => drawNewCard() }
                disabled={ gameOver }
            >Draw</button>           
        </div>
    )
}