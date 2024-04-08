var s1 = "abcdefg";
var s2 = 'abcdefg';

var s3 = "abc'd";
var s4 = 'abc"d';

var s5 = "abc\"d";
var s6 = 'abc\'d';

console.log(s1.charAt(1));
console.log(s1.concat(s2));
console.log(s1.concat(s2, s3, s4));
console.log(s1.substring(0, 2));
console.log(s1.substr(2, 2));
console.log(s1.indexOf("g"));
console.log(s1.indexOf("a", 2));
console.log("  abcdefg   ".trim());
console.log("a|b|cdef|g".split("|"));




