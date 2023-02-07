function baNgoi(){
    money = {
        bookN: 'XSa',
        coin : 100
    }
    var a = money.coin > 0 ? `${money.coin} Coins`: 'free';
    console.log(a);
    console.log("--");

    var tip = 15;
    var color = tip > 10 && tip < 20 ? "xanh":
                tip > 20 && tip < 100 ? "vang":
                tip > 100 ? "hong ": "do"
                console.log( color);
    console.log("--");

    var login = "Employee"
     var mess = login == "Employee" ? "hi": "no login"
     console.log( mess);
}
baNgoi()
