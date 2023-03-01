
function printAsyncName(callback, name){
    setTimeout(callback,1000);
    setTimeout(() => {console.log(name);},2000);
    return callback
}

function second(){
    const string = console.log("Hello!")
    return string
}

printAsyncName(second, "Mario");