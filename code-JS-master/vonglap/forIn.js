// vd gọi ra các tên của các sp

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
        name: 'keo',
        price: 5000
    },
 ];


for (const key in orders) {
    if (orders.hasOwnProperty.call(orders, key)) {
        const element = orders[key].name;
        console.log(element);
    }
}
console.log("----------");
// vd2
var color = ['xanh', 'do', 'tim']
for (const key in color) {
   
    console.log(key);
}

console.log("----------");
// vd3
for (const key in color) {
    if (color.hasOwnProperty.call(color, key)) {
        const element = color[key];
        console.log(element);
    }
}

console.log("----------");

