let x=new Array();
x['RPL']='Rekayasa Perangkat Lunak';
x['TKJ']='Teknik Komputer dan Jaringan';

for(key in x){
    console.log(key.toUpperCase()+'\t='+x[key]);
}