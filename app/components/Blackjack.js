
export default function Blackjack() {
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