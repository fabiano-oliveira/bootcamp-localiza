let line = "10".split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H || 0) * (P || 0);          
let mediaFinal = Math.round((media / 12) * 1000) / 1000;

console.log(mediaFinal);
console.log(" " + mediaFinal.toFixed(3));

