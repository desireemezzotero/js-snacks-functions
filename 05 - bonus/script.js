/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const date = new Date ();
/* console.log(date.getHours()) */


// Dichiara la funzione qui.

function array (names) { 
  names = '';
  if (date < 13) {
    names = 'buongiorno'
  } else if (date > 13 && date < 17) {
     names = 'buon pomeriggio'
  } else {
    names = 'buonasera'
  }

  return names
}
 


// Invoca la funzione qui e stampa il risultato in console
 console.log(array(name), name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.