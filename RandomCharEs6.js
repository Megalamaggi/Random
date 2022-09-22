const {range} = require('@laufire/utils/collection')

// const characters = "abcdefghijklmnopqrstuvwxyz"
//  const generateString = (length) => {
//     let result = " ";
//     const charactersLength = characters.length;
//     range(0,length);
//     for (let i=0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }
// return result;
// }
// console.log(generateString(7));
// console.log(range(0,5));


const characters = "abcdefghijklmnopqrstuvwxyz"
 const generateString = (length) => {
    const charactersLength = characters.length;
    const result =  range(0,length).reduce((prevValue) =>
     prevValue + characters.charAt(Math.floor(Math.random() * charactersLength)) ,""); 
return result;
 }
console.log(generateString(7));
