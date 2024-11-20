/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function array(name) {
  let newArray = [];
  let letter; 
  for (let i = 0; i < name.length; i++) {
   letter = name[i].at(0);
   newArray.push(letter);
  }

  return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(array(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]