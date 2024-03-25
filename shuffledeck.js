//JavaScript Program to Shuffle Deck of Cards

const suits = ["spades", "diamonds", "club", "hearts"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

let deck = [];
for(let i = 0; i < suits.length; i++){
    for(let x =0; x < values.length; x++){
        let card = {value:values[x], suit:suits[i]}
        deck.push(card);
    }
}
for(let i = deck.length - 1; i > 0; i--){
    let j = Math.floor(Math.random()*i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
for(let i= 0; i< 5; i++){
    console.log(`${deck[i].value} of ${deck[i].suit}`)
}