//1 - Creare un prompt per chiedere la parola all'utente
const userWord = prompt('Inserire una parola');
//2 - creo la funzione di confronto
function confronto(word) {
    //2.1 creo una variabile e 2.2 trasformo la stringa in array e 2.3 inverto la posizione delle lettere e 2.4 la ritrasformo in stringa 
    let secondWord = word.split("").reverse().join('')
    console.log(secondWord);
    //3 confronto le due parole
    //3.1 - se le parole corrispondo resituisco 'True'
    if ( word === secondWord){
        return true
    }
    //3.2 - se le parole non corrispondo restituisco 'False'
    else {
        return false
    }
}
//4 - invoco la funzione
confronto(userWord)
//4.1 - se la funzione mi restituisce 'True', creo un alert 'La parola inserita è palindroma'
if (confronto(userWord)){
    alert('La parola inserita è palindroma')
}
//4.2 - se la funzione mi restituisce 'False', creo un alert 'La parola inserita nonè palindroma'
else {
    alert('la parola inserita non è palindroma')
}