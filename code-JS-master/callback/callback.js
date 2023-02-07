function Note(params) {
    console.log('M1');
}
function Mymine(value) {
    console.log("12",value)
}


Note(Mymine);


// vd2


function funcParent(text, callback) {
    console.log(text);
    
    callback(text);
}

funcParent('Hello World', function(text) {
    console.log('Callback: ' + text);
    
});


function Note(params) {
    console.log('M1');
}
function Mymine(value) {
    console.log("12",value)
}


Note(Mymine);
//vd 3
function mua(sp) {
    console.log("san pham ", sp);
    
    setTimeout((a) => {
        a = sp
        console.log(a);
    }, 2000);
}

mua(12)



