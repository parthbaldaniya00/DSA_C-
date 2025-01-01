let isPalindrome = function(x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
};

let ans = isPalindrome(121);
console.log(ans);