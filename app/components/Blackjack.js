
export default function Blackjack() {

    async function newDeck() {
        const result = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${1}`);
        const data = await result.json();
    }

    return ( 
        <div
            className="h-dvh w-dvw flex flex-col items-center justify-center"
        >
            <h1
                className="text-4xl"
            >
                BLACKJACK 🃏
            </h1>
            <p
                className="text-2xl m-6"
            >
                New Game?
            </p>
            <button
                className="p-2 bg-green-500 hover:bg-green-700 text-white m-5"
            >
                Start
            </button>
        </div>
    )
}