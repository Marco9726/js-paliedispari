//1 - creo una costante riferta al button 
const button = document.getElementById('button');
//2 - addEventListner al click del button
button.addEventListener('click', function () {
  
  //2.1 - creo una costante relativa alla prima scelta del giocatore, pari o dispari
  const userEvenOdd = document.getElementById('EvenOdd').value
  //2.2 - creo una costante relativa alla seconda scelta del giocatore, un numero compreso tra 1 e 5
  const userNumber = document.getElementById('Numbers').value

    //2.3 - tramite una funzione genero un numero casuale tra 1 e 5
    function compRandomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    //2.4 - assegno il valore di tale numero ad una costante
    const compNumber = compRandomNumber(1, 5);
    console.log(compNumber)
    //2.5 - visualizzo a schermo il numero casuale generato dal computer
    document.getElementById('compnum').innerHTML = ""
    document.getElementById('compnum').innerHTML += compNumber
    console.log(userNumber);
    //2.6 - creo una variabile vuota relativa alla somma dei due numeri
    let sum
    //2.7 - all'interno di una funzione sommo i due numeri
    function addition(num1, num2) {
       sum = num1 + num2;
       //2.7.1 - tramite un if determino se il risultato è pari o dispari
      if (sum % 2 === 0){
          return 'pari';
      }
      else {
          return 'dispari';
      }
      }
    //2.8 - creo una costante relativa al risultato dell'addizione invocando la funzione
      const result = addition( parseInt(userNumber), parseInt(compNumber))
      console.log(result);
    //2.9 - tramite un if confronto se la scelta del giocatore corrisponde al risultato
      if ( result == userEvenOdd)
      {
        //2.9.1 - se lo è, mostro a schermo 'Hai vinto' e la somma dell'addizione
        document.getElementById('result').innerHTML = `Hai vinto, la somma è ${sum}`;
      }
      else {
        //2.9.2 - se non lo è, mostro a schermo 'Hai perso' e la somma dell'addizione
        document.getElementById('result').innerHTML = `Hai perso, la somma è ${sum}`;
      }     
    
})

