/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x>=Math.pow(2,31))
        return 0;
    if(x<=Math.pow(-2,31))
        return 0;
    if(x>=0){
        x=x+"";
        return +(x.split("").reverse().join(""));
    }
    else{
        x=Math.abs(x)+"";
        return (+(x.split("").reverse().join("")))*-1;
    }
};

