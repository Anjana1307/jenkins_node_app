const add = require("./index");

if (add(20,30)==50){
    console.log("Test case passed");
    process.exit(0);
} else {
    console.log("Result is not matching");
    process.exit(1);
}