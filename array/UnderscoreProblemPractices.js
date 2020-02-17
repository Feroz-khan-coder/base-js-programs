const _ = require("lodash")

function message()
{
    console.log("Some message");
}

_.delay(message, 2000);
console.log("Some other message");