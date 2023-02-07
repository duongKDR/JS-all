function printAmount(amt) {
	console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
	return "$" + amount.toFixed( 2 );
}

let amount = 99.99;

printAmount( amount * 2 );		

amount = formatAmount();
console.log( amount );
console.log("----------");

// vd 2

function findMax(x,y,x) {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }

console.log(findMax(3,4,8));
console.log("----------");

// vd truyền nhiều đối số theo 2 cách

// --- cách 1 
//Array-Like Objects

 function sum() {
	let result = 0;
	for(let i = 0; i < arguments.length; i++) {
	  result += arguments[i];
	}
	return result;
  }
  
  console.log(sum(1,2));
  console.log(sum(1,2,3,4));
  console.log(sum(1,3,5,7,9));
console.log("----------");
  // vd2
 function sumResult(...args) {
	let result = 0;
	for(let i = 0; i < args.length; i++) {
	  result += args[i];
	}
	return result;
  }
  console.log(sumResult(1,2));
  console.log("----------");