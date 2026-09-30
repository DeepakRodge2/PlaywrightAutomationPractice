const promptSync = require("prompt-sync");
//initilze the prompt
const prompt=promptSync({sigint:true})
const name=prompt("what is your username:")
console.log(name);

