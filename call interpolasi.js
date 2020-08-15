let a=2.3;
let b=2.8;
function kali(a,b){
    return a*b;
}

console.log(Masukkan nilai a: ${nilai a});
console.log(Masukkan nilai b: ${nilai b});
let c;

//memanggil fungsi dan menampungnya ke c
c=kali(a,b);

console.log(`${a}x${b}=${c}`);
//atau
//memanggil fungsi dan menampungnya ke c
//c=kali(a,b);

//console.log(`${a}x${b}=${c}`);
console.log(`${a}x${b}=${kali(a,b)}`);
