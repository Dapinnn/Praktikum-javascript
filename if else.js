console.log('\n >> 2.ini perintah if else');
var x = 6;
console.log('Nilai x: '+x);
var y = 0;
console.log('Nilai y: '+y);
var z;

if (y===0){
    console.log('kesalahan: nilai y tidak boleh nol');
   // Process.exit(1);
}else{
    z=x/y;
    console.log(`${x}/${y},=${z}`);
}
