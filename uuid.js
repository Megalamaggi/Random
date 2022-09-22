const file = require('./RandomHexa');

function getRandomHexString(length) {
    let result = '';
    for(var i = 0; i < length; i++) {
        result += (`${file.getRandomHex()}`);
    }
    return result;
}
function getUUID() {
    const partLengths = [8,4,4,4,12];
    const result = partLengths.map((partLength)=>getRandomHexString(partLength)).join("-");
    return result;
}
