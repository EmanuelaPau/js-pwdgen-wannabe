console.log('hello');

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedi all’utente il suo nome,
let myName = prompt("Qual è il tuo nome?");
console.log(myName);

// poi chiedi il suo cognome,
let surname = prompt("Qual è il tuo cognome?");
console.log(surname);

// poi chiedi il suo colore preferito
let favNumber = prompt("Qual è il tuo numero preferito?");
console.log(favNumber);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
let yourPassword = myName + surname + favNumber + '21';
console.log(yourPassword);

document.getElementById("my_magicpassword").textContent = "Your magic Super Password is: " + yourPassword;;

