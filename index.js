const fs = require("fs");
const d = fs.readFileSync("pi.txt", "utf-8").slice(2);
var p = [];
var dm = 0;
const st = Date.now();

const ip = (n) => {
  for (var i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;
  return n > 1;
};

for (var i = 0; i < d.length; i++) {
  const cr = d.substr(i, 15);
  if (ip(cr)) p.push(cr);
  dm++;
  if (p.length >= 10) break;
}

console.log("10. 15 digits prime number:", p[p.length - 1]);
console.log("decimal:", dm);
console.log(`time: ${(Date.now() - st).toLocaleString()}s`);
