
function printAsyncName(callback, name){
    setTimeout(() => { 
        const printName = console.log(name);
        return printName
    },2000);
    return callback
}


setTimeout(printAsyncName(() => {console.log("Hello!")}, "Mario") );