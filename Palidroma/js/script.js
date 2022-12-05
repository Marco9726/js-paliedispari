//1 - Creare un prompt per chiedere la parola all'utente
const userWord = prompt('Scrivere una parola');
//2- Trasformare la parola inserita in un array
let myWord = userWord.split("")
// //3 - Inverto l'ordine delle lettere dell'array creato
// myWord.reverse
// console.log(myWord);

function confronto(firstWord, secondWord)
 {
    secondWord = secondWord.reverse
    secondWord = secondWord.join
    console.log(secondWord);
    if ( `${firstWord} === ${secondWord}`)
    {
        alert('si')
    }

    else 
    {
        alert('no')
    }
    
}

confronto(userWord, myWord)