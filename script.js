


const userName = prompt('Inserisci il tuo nome');
const userLastname = prompt('Inserisci il tuo cognome');
const userColor = prompt('Inserisci il tuo colore preferito');


let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `${userName}${userLastname}${userColor}21`;
