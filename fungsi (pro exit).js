let a= 2;
console.log('nilai a: ' + a);
let b = 4;
console.log('nilai b: ' + b);
let c;

if(b===0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);