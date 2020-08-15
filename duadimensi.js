let siswa=[
    ['1','DAVINA','MALANG'],
    ['2','VITA','TULUNGAGUNG'],
    ['3','MANDA','MALANG']
];

console.log('No \t Nama Siswa \t asal');
console.log('--- \t ------ \t -----');
for(let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        console.log(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            //console.log(' \t  ');
        }
    }
    console.log();
}