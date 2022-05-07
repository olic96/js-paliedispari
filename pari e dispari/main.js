// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 1. genero la funzione
    // genero un numero random da 1 a 5 per la cpu
    // sommo il numero della cpu e dell'utente
    // stabilisco la somma (pari o dispari) e chi ha vinto

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function sum(cpuNumber, userNumber) {
        return cpuNumber + userNumber;
    }
    
    function isEven(num) {
        if(num % 2 === 0) {
            return true;
        } 
        return false;
    }
    
    const userChoice = prompt ("pari o dispari?"); 
    const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
    
    const cpuNumber = randomNumber(1, 5);
    const total = sum(cpuNumber, userNumber);
    
    console.log(total);
    
    if (isEven(total) && userChoice === "pari") {
        console.log("utente vince");
    } else if (!isEven(total) && userChoice === "dispari") {
        console.log("utente vince");
    } else {
        console.log("cpu vince");
    }