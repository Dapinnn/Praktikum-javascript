/*let i = 100;
while(i<5){
    console.log(i);
    i++;
}*/
//(codingan diatas tidak ada hasilnya)

/*let i =100;
do{
    console.log(i);
    i++;
}while ( i<5);*/
//(codingan diatas hasilnya 100)

let data = [10,20,30,40,50,60];
let jumlah;
let x;

jumlah=0;
x=0;
do{
    jumlah += data[x];
    x++;
}while (x<data.length);

console.log(`jumlah data = ${jumlah}`)
