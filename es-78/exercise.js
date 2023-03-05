function isLoggedIn(isLogged){
    return new Promise ((resolve, reject) => {
        if(isLogged){
            resolve (rand = Math.random());
        } else {
            reject(new Error(`L'utente non è loggato`));
        }
    })
}

function getUserDetails(rand){
    return new Promise ((resolve, reject) => {
        if(rand > 0.5){
            resolve( data = {"name": "John", "age": "24"});
        } else {
            reject(new Error(` ${rand} troppo basso`));
         }
    })
}

function getData(data){
    return data 
}

isLoggedIn(true)
.then(getUserDetails)
.then(getData)
.then((data) => console.log(data))
.catch((err) => console.error(err))
.finally(() => console.log("Promise chining completata"))