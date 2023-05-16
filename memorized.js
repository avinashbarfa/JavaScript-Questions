const memorized = (fn) => {
    const cache = {};
    return (...args) => {
        const argsToString = JSON.stringify(args);
        if (argsToString in cache) {
            console.log('Getting result from cache');
            return cache[argsToString];
        } else {
            console.log('Process Result and save in cache');
            const result = fn.apply(this, args);
            cache[argsToString] = result;
            return result;
        }
    }
}

const add = (a,b) => a+b;
const multi = (a,b) => a*b;

const memorizeAdd = memorized(add);
const memorizeMulti = memorized(multi);

console.log(memorizeAdd(1,2));
console.log(memorizeAdd(1,2));
console.log(memorizeAdd(3,4));
console.log(memorizeAdd(1,2));

console.log(memorizeMulti(1,2));
console.log(memorizeMulti(1,2));
console.log(memorizeMulti(3,4));
console.log(memorizeMulti(1,2));