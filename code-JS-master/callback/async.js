
//callback hell
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
             },1000)
         },1000)
    },500)
 },500)



 //promise
 const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hi');
    }, 3000);
  });
  
  myPromise.then(value => { console.log(value) })
  

  
//async = p

  async function myFunction() {
    setTimeout(() => {
        return console.log("hiiii");
    }, 5000);
   
  }
 myFunction()

//  async/ await

let myPromise2 = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve("hi"): reject("sorry");
  }, 6000);
}); 


const  awaitP  = async () => {  
   const b = await myPromise2.then(value => { console.log(value); }, error => { console.log(error); } )
  return console.log('xong');
}
awaitP()
