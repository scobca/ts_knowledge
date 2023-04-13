//for
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('');
var count = 0;
for (var n = 0; n < 5; n++) {
    count++;
    console.log(count);
}
console.log('');
// for-of
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elem = arr_1[_i];
    console.log(elem);
}
console.log('');
//for-in
var obj = { a: 1, b: 2, c: 3 };
for (var key in obj) {
    console.log(key);
}
