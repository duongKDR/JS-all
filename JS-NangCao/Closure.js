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