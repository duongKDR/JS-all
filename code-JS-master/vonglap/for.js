function vd1(a) {
    for (let i = 1; i <a; i++) {
        
        console.log( i);
    }
}
vd1(9);

console.log("----------");

function vd1(b) {
    for (let i = 1; i <b; i--) {
        
        console.log( i);
    }
}
vd1(9);

console.log("----------");


//vd2

var vd2 = function(nums) {
    var nums = [3,2,3] 
    let tong = 0 
 for (let index = 0; index < nums.length; index++) {
    index += nums[index];
    console.log(index); 
    }

    

};
 vd2();
 console.log("----------");

 //vd3

 var orders = [
    {
        name: 'tra sua',
        price: 50000
    },
    {
        name: 'kem',
        price: 30000
    },
    {
        name: ' keo',
        price: 5000
    },
 ];
 function getTotal(orders) {
    var results = 0
    for (var i = 0; i < orders.length; i++) {
        results += orders[i].price
    }
    console.log(results);
    return results
}


getTotal(orders)
