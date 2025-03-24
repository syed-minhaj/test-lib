const {console_test} = require("@test-lib-minhaj/1")
function run(){
    
    console_test();
    console.log("this from test2");
}
console.log("this is from test2");
module.exports = {run};