//contoh fungsi nilai balik
function kali(a,b){
    c=a*b;
    return c;
}
//atau

function kali(a,b){
    return a*b;
}
//fungsi tanpa nilai balik
function cetak (x,y){
    for (let i=0;i<y;i++) {
        console.log(x);
    }
}
//memanggil fungsi
//mendeklarasikan hasil variabel penampung nilai fungsi
let hasil;
//memanggil fungsi kali()
hasil = kali(10,20);