const max = 10;
const min = 1;
const randomBetween = (min,max) => Math.floor(Math.random() * (max-min+1) + min);
console.log(randomBetween (min,max));

const num = randomBetween(1,16);
randomCharacter = () => num.toString(16);
console.log(randomCharacter());