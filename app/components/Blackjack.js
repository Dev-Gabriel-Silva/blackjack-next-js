'use client'
import { useEffect, useState } from "react";
import Hand from "./Hand";
import StartNewGame from "./StartNewGame";

export default function Blackjack() {
    const [ isPlaying, setNewGame ] = useState(false); // Cria um estado para armazenar se está ocorrendo um jogo no momento
    const [ decks, setDecks ] = useState({}); // Cria um estado para armazenar o deck durante a fase de montagem e pós requisição
    const [ cardHand, setCardHand ] = useState(false); // Cria estado para armazenar mão de cartas

    useEffect(() => {
        newDeck();
    },[])

    async function newDeck() {
        const result = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${1}`);
        const data = await result.json();
        setDecks(data);
    }

    async function start() {
        setNewGame(true);
        drawHand();
    }

    async function drawHand() {
        const { deck_id } = decks;
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${ deck_id }/draw/?count=${2}`); // Request draw 2 cards, default on Blackjack
        const data = await response.json(); // Converte a resposta para json
        setCardHand(data); // Salva o estado da mão
    }

    return ( 
        <div
            className="h-dvh w-dvw flex flex-col items-center justify-center"
        >
                { isPlaying && cardHand ? <Hand hand={cardHand} /> : <StartNewGame setNewGame={ () => start() }/>}
        </div>
    )
}