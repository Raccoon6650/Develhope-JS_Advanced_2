function sum(...others) {
    arr = []
    arr.push(...others)
    const somma = arr.reduce((newVal, tot) => tot + newVal);
    return somma
}

console.log(sum(1,2,3,4,5));
console.log(sum(6,7,8,9,10));
