//1 - Chiedo all'utente di scegliere pari o dispari
let userNumber = ""
do {
     userNumber = prompt('Scegli pari o dispari').toLocaleLowerCase()
//1.1 - far ripetere il prompt in caso scelga un'opzione che non sia pari o dispari
} while( userNumber != 'pari' && userNumber != 'dispari')

