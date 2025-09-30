import { useEffect, useState } from "react";

export default function Score({ cardHand }) {
    const [ score, setScore ] = useState(0);

    useEffect(() => {
        calcScore(cardHand);
    },[cardHand])

    function calcScore() {
        let total = 0;
        cardHand.forEach(card => {
            const simbols_value = new RegExp('^[AQJK]');
            const { value } = card;
            if(simbols_value.test(value)){
                total += 10
            }else{
                total += parseInt(value);
            }
        });
        setScore(total);
    }
    return(
        <h1
            className="text-serif text-3xl m-12"
        >Pontuação: {score}</h1>
    )
}