/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function array(name) {
  let newArray = [];
  const letter = 'A';

  for (let i = 0; i <= name.length; i++) {

   if (name[i].at(0) == letter) {
    newArray.push(name[i]);
    console.log(newArray);
    } else {
    newArray = [];
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
 console.log(array(names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

