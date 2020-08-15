var a=10;
console.log("Masukkan nilai a:"+a);
var b=4;
console.log("Masukkan nilai b:"+b);

function PembagianBulat(a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}
console.log(`${a}/${b}=${PembagianBulat(a,b)}`);

//atau bisa diganti seperti codingan dibawah

/*
function PB(a,b){
    var c=a/b;
    return(c>=0)? Math.floor(c): Math.ceil(c);
}
console.log(`${a}/${b}=${PB(a,b)}`);*/