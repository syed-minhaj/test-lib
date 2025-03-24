const {console_test} = require("test-lib-minhaj")
function run(){
    
    console_test();
    console.log("this from test2");
}
console.log("this is from test2");
module.exports = {run};