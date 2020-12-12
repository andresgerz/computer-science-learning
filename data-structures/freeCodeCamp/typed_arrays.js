let buffer = new Float64Array(8);
let i32View = new Int32Array(16);

console.log(buffer);
console.log(buffer.byteLength);

buffer[0] = 1.16;
buffer[1] = 3.1415;
buffer[2] = 42;
buffer[3] = 1.11;

console.log(buffer);
console.log(buffer.byteLength);
console.log("========================");
console.log(i32View);
console.log(i32View.byteLength);

