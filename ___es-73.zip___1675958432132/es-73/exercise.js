
function printAsyncName(callback, name){
    setTimeout(() => { 
        const printName = console.log(name);
        return printName
    },2000);
    return callback
}

function second(){
    const string = console.log("Hello!")
    return string
}

setTimeout(printAsyncName(second, "Mario"), 1000);