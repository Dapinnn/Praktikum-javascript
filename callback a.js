var a =3;
console.log('masukkan nilai a: ' + a);
var b = 4;
console.log('masukkan nilai b: ' + b);

function tambah(a,b){
    return a+b;
}

function kurang(a,b){
    return a-b;
}

function kali(a,b){
    return a*b;
}

function bagi(a,b){
    return a/b;
}

function hitung(a,b,callback){
    return callback(a,b);
}

console.log(`${a}+${b}= ${hitung(a,b,tambah)}`);
console.log(`${a}-${b}= ${hitung(a,b,kurang)}`);
console.log(`${a}*${b}= ${hitung(a,b,kali)}`);
console.log(`${a}/${b}= ${hitung(a,b,bagi)}`);