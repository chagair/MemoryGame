const cards= ['CHAGAI','CHAVA','DAGAN','ORI TZION','RAZ ELISHA','CHAGAI','CHAVA','DAGAN','ORI TZION','RAZ ELISHA'];
const board =document.getElementById("board");

function createCard(idx){
    const cardEl = document.createElement("div");
    cardEl.innerHTML =[idx]
    cardEl.id =idx;
    return cardEl;
}

for (i of cards){
const element =  createCard(i);
board.appendChild(element);
}

function shuffle(arr){
    

}
