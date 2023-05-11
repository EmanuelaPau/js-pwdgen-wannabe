console.log('hello');

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedi all’utente il suo nome,
const myName = prompt("Qual è il tuo nome?");
console.log(myName);

// poi chiedi il suo cognome,
const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

// poi chiedi il suo colore preferito,
const MyColor = prompt("Qual è il tuo colore preferito?");
console.log(MyColor);

// poi chiedi il suo numero preferito
const favNumber = prompt("Qual è il tuo numero preferito?");
console.log(favNumber);

const favNumberTen = parseInt(favNumber) + 10;

// Infine scrivi sulla pagina nomecognomecolorepreferito21
const yourPassword = `${myName}${surname}${favNumberTen}21`;

console.log(yourPassword);

document.getElementById("my_magicpassword").textContent = yourPassword;