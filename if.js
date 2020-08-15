var x = 6;
console.log('Masukkan Nilai x: '+x);
var y = 8;
console.log('Masukkan Nilai y: '+y);
var z;

if (y==0){
    console.log('kesalahan: nilai y tidak boleh nol');
    Process.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);