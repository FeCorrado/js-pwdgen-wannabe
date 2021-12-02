

const pizza = prompt('Che pizza vuoi?');
const aggiuntaa = prompt('Vuoi aggiunte N1?');
const aggiuntab = prompt('Vuoi aggiunte N2?');
const dolce = prompt('Vuoi dolce?');
const bibita = prompt('Vuoi qualcosa da bere?');


let htmlElement = document.getElementById('ordine');
htmlElement.innerHTML = `Pizza ${pizza} con ${aggiuntaa} e ${aggiuntab} --- DOLCE:${dolce} --- DA BERE: ${bibita} --- Il tuo ordine è il numero 12658 aspetta alla cassssa il tuo turno`;