array = [1,2,3,4,5];

function sum(arr) {
    const sum = arr.reduce((newVal, tot) => tot + newVal );
    return sum
}

console.log(sum(arr=[6,7,8,9,10]));
console.log(sum(array));
