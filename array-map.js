

const array = [1,2,3,4,5];

// solution 1
Array.prototype.myMap = function(callbackFn) {
    const result = [];
    for (let i=0; i< this.length; i++) {
        result.push(callbackFn(this[i]));
    }
    return result;
}

console.log(array.myMap((i) => i *3));

// solution 2
Array.prototype.myMap = function (callbackFn) {
    const output = [];
    this.forEach((ele, index) => 
        output.push(callbackFn(ele, index, this)));
    return output;
}

console.log(array.map((item) => item * 2));
console.log(array.myMap((item) => item * 3));