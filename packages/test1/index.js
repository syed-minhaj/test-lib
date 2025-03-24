// exports.printMsg = function() {
//     console.log("This is a message from the test package syed-minhaj/test-lib ");
// }
function console_test(){
    console.log("This is a message from the test package syed-minhaj/test-lib how  ");
    
}

function abc_test(a){
    const e = process.env.ABC;
    console.log(`this ${a} is from module ${e} ` );
}
console.log("this is from test package");
module.exports = {console_test , abc_test};