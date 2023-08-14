let stones = Math.pow(10, 10);
let l = 0;
let r = 0;
while (stones > 0) {
    stones -= 10;
    l += 9;
    r += 1;
}
console.log({stones, l, r})