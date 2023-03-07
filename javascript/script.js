const firstName = prompt("come ti chiami?");
const secondName = prompt('inserisci il tuo cognome');
const favouriteColor = prompt('inserisci il tuo colore preferito');
console.log(firstName, secondName, favouriteColor);

//elaboro dati
const number ='21'
const password = `password: ${firstName}${secondName}${favouriteColor}${number}`;
console.log(password, typeof password);

//output
document.getElementById("new-password").innerHTML = password;