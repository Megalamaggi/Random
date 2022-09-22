
function  getRandomBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1) +min);
}

 function getRandomCharacter() {
    return getRandomBetween(0,15).toString(16);
 }

 function getRandomString(length) {
    let result= '';
    for (let i = 0; i<length; i++) {
        result+=getRandomCharacter();
    }
    return result;
}

function getUUID() {
    const values = [8,4,4,4,12];
    const result = values.map((ele)=>getRandomString(ele)).join('-');
    return result;
}


function main() {
console.log("Random UUID:" + getUUID());
}
main();