function repeatHello (callback, i){
    const index = setInterval(callback, 1000);
    setTimeout(() => clearInterval(index), 1000 * i)
}


repeatHello(() => {console.log("Arrow hello!") }, 5);