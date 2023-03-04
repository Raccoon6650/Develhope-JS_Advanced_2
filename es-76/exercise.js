
let exemplePromise = new Promise ((resolve, reject) => {
    const num = 15;
    if (num > 10){
      resolve(` ${num} è maggiore di 10`);      
    } else {
        reject(` ${num} è troppo basso`);
        //reject(new Error(` ${num} è troppo basso`));  in caso l'eseracizio avesse richiesto di rimandare un errore
    }
})
  
exemplePromise
    .then((value) => console.log(value))
    .catch((err) => console.error(err))
