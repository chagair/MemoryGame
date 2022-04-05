const cards= ['CHAGAI','CHAVA','DAGAN','ORI TZION','RAZ ELISHA','CHAGAI','CHAVA','DAGAN','ORI TZION','RAZ ELISHA'];
const board =document.getElementById("board");

for (i in cards){
const element =  document.createElement("div");
element.innerHTML = cards[i];
board.appendChild(element);
}