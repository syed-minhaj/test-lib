const {console_test} = require("@test-lib-minhaj/test1")
function run(){
    
    console.log("this from test2");
}
console_test()
console.log("this is from test2");
module.exports = {run};