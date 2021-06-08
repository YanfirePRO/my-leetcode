/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n < 0 ? (1 / quick(x, -n)).toFixed(5) : quick(x, n)
};

var quick = function(x, n){
    if(n == 0) return 1.0;
    let mi = Math.floor(n/2);
    let y = quick(x, mi);
    return n % 2 ? y*y*x : y*y
}
let x = 2;
let y = -2;
console.log(myPow(x, y));