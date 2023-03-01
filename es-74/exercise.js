function repeatHello (callback, i){
    const index = setInterval(callback, 1000);
    setTimeout(() => clearInterval(index), 1000 * i)
}

function printHello (){
    const string = console.log("Hello!")
    return string
}

repeatHello(printHello, 5);
repeatHello(() => {console.log("Arrow hello!") }, 5);


//Ho riprodotto l'esercizio sia con una funzione normale che con una arrow per quanto riguarda
//la funzione di Callback quindi credo che l'unico motivo per farla come arrow sia quello di
//scrivere un codice più rapido e pulito.