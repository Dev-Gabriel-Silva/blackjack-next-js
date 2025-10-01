import { useEffect, useState } from "react";

export default function Score({ cardHand, setScore, score}) {

    useEffect(() => {
        calcScore(cardHand);
    },[cardHand])

    function calcScore() {
        let total = 0;
        let ace = 0;
        cardHand.forEach((card) => {
            const { value } = card;
            const simbols_regex = new RegExp('^[AQJK]');

            if(simbols_regex.test(value)){
                if(value === 'JACK' | value === 'KING' | value === 'QUEEN') {
                    total += 10;
                }else if(value === 'ACE'){
                    ace += 1
                }
            }else{
                const num = parseInt(value);
                total += num
            }
        });
        if(ace > 0) {
            for(let i = 0; i < ace; i+= 1){
                if(total + 11 < 21 | total + 11 === 21) {
                    total += 11
                    ace -= 1
                }else if(total + 11 > 21){
                    total += 1
                }
            }         
        }
        setScore(total);
    }
    return(
        <h1
            className="text-serif text-3xl m-12"
        >Pontuação: {score}</h1>
    )
}