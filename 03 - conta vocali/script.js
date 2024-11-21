/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
console.log('ciao!!!');
// Dichiara la funzione qui.
function array (name){
  let newArrray = []; 
  const lettere = 'aeiou'
 
  for (let i = 0; i < name.lenght; i++) {
    if (lettere.includes(name[i])) {
      newArrray.push(name[i])
    } 
    console.log('entrato nel for')
  }

  return newArrray
}

// Invoca la funzione qui e stampa il risultato in console

console.log (array(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)