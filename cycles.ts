//for
for (let i: number = 0; i <= 10; i++) {
    console.log(i);
}

console.log('');

let count: number = 0;
for (let n: number = 0; n < 5; n++) {
    count++
    console.log(count)
}

console.log('');

// for-of
let arr: number[] = [1, 2, 3, 4, 5]
for (let elem of arr) {
    console.log(elem)
}

console.log('');

//for-in
let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key);
}