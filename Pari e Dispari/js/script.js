//1 - Chiedo all'utente di scegliere pari o dispari
let userEvenOdd = ""
do {
     userEvenOdd = prompt('Scegli pari o dispari').toLocaleLowerCase()
//1.1 - far ripetere il prompt in caso scelga un'opzione che non sia pari o dispari
} while( userEvenOdd != 'pari' && userEvenOdd != 'dispari')

//2 - Chiedo all'utente di inserire un numero da 1 a 5
let userNumber
do {
    userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
//2.1 - far ripetere il prompt in caso scelga un numero che non sia compreso tra 1 e 5
} while ( userNumber < 1 || userNumber > 5)


