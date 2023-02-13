function cClosure() {
    let count = 0
    function inC(){
        return ++count;
    }
    return inC
  
  }
  
  const c1 = cClosure()
  console.log(c1());
  console.log(c1());

  ////////
  function showName (firstName, lastName) {

    var nameIntro = "name la ";
    
    // Đây là hàm bên trong mà có thể truy cập đến biến của hàm bên ngoài, truy cập được tham số của hàm ngoài.
    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }
    
    return makeFullName ();
}

console.log( showName ("Duong", "R"));