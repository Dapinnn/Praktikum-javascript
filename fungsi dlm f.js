console.log('menghitung sisi miring segitiga siku-siku');
var a = 3;
console.log('nilai alas: ' + a);
var b = 4;
console.log('nilai tinggi: ' + b);
 
function hipotenusa(a,b){
    // fungsi lokal
    function kuadrat(x){
        return x * x;
    }
    // memanggil fungsi lokal
    return c = Math.sqrt(kuadrat(a)+kuadrat(b));
}
 
var c = hipotenusa(a,b);
console.log(`sisi miring = ${c}`);
