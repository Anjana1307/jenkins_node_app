console.log("Starting Node.js inside Docker.....");
for (let i=1; i<=5;i++){
    console.group('Message #${i}:Hello Docker!');
}
console.log("Node.js inside Docker is running successfully!");

function add(a,b){
    return a+b;

}
console.log("Addition of 5 and 10 is: ", add(5,10));
module.exports = add;