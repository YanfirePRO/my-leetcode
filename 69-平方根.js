/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) return 0;
    if (x == 1) return 1;
    let mi = Math.floor(x/2);
    let lo = 0;
    let hi = x;
    while(true){
        console.log(lo, mi, hi);
        if(mi*mi == x || mi*mi < x && x < (mi + 1) *(mi + 1)){
            return mi;
        } 
        if(mi*mi < x){
            lo = mi;
            mi = Math.floor((hi+mi)/2);
        } else{
            hi = mi;
            mi = Math.floor((lo+mi)/2);
        }
    }
};

console.log(mySqrt(16))