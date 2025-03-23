// exports.printMsg = function() {
//     console.log("This is a message from the test package syed-minhaj/test-lib ");
// }

function console_test(){
    console.log("This is a message from the test package syed-minhaj/test-lib ");
}

function abc_test(a){
    const e = process.env.ABC;
    console.log(`this ${a} is from module ${e} ` );
}

module.exports = {console_test , abc_test};