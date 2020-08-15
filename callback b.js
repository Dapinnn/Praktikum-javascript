var a = 3;
console.log(' masukkan nilai a: ' + a);
var b = 4;
console.log(' masukkan nilai b: ' + b);

function hitung(a,b,callback){
    return callback(a,b);
}

console.log('\n');
console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));