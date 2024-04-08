var l = [1, [2, 3], "4", false];

console.log(l);
console.log(Array.isArray(l));
console.log(l.push("a", "b"));
console.log(l.pop());

console.log(l.unshift("a", "b"));
console.log(l.shift());

console.log(l.join("|"));

console.log(l.concat("b"));
console.log(l.concat([5, 6]));

console.log(l.reverse());

console.log(l.indexOf("4"));
console.log(l.indexOf("4", 5));

