////biến toàn cục
 var toanCuc = 7;

 function ham() {
    
    console.log(toanCuc);
 }
 ham()


 // Block Scope
 function myFunction() {
    {
        let x = 2;
        
      }
      
    }
   
//console.log(x);//ko goi dc 
// FunctionScope

function FS() {
    function FS2() {
        var a = "hi"
    
    }
    FS2()
}
FS()
//console.log(a); ko gọi dc