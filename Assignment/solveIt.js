
// // solve it 1
// console.log("solution 1:")

// var x = 4
// var y = 3
// var z = 2

// var w =Math.pow( ((x+y*z)/(x*y)),z )

// console.log(w)
// console.log("\n");


// // solve it 3
// console.log("solution 3:")

// console.log(Math.cbrt(8))
// console.log("\n");



// // solve it 4
// console.log("solution 4:")

// var totalHari= 485
// var tahun=Math.floor(totalHari/360)
// var bulan=Math.floor((totalHari%360)/30)
// var minggu=Math.floor((totalHari%30/7))
// var hari=Math.floor((totalHari%30)%7)

// console.log("tahun :"+tahun)
// console.log("bulan :"+bulan )
// console.log("minggu :"+minggu)
// console.log("hari :"+hari)
// console.log("\n")


// // solve it 5
// console.log("solution 5:")
// var usiaAndi
// var usiaBudi

// usiaBudi= 49/1.4
// usiaAndi=49-usiaBudi

// console.log(usiaAndi+2)
// console.log(usiaBudi+2)
// console.log("\n");


// // solve it 6
// console.log("solution 6:")

// var tgl= new Date()

// var hariIni=tgl.getDate()
// var besok=tgl.getDate()+1
// var kemarin=tgl.getDate()-1

// console.log("Hari ini tanggal :"+hariIni+"-"+(tgl.getMonth()+1) +"-"+tgl.getFullYear() )
// console.log("Besok tanggal :"+besok+"-"+(tgl.getMonth()+1) +"-"+tgl.getFullYear() )
// console.log("Kemarin tanggal :"+kemarin+"-"+(tgl.getMonth()+1) +"-"+tgl.getFullYear() )
// console.log("\n")


// // solve it 7
// console.log("solution 7:")

// var kalimat1="abracadabra"
// var pjgKal1=kalimat1.length

// var kalimat2=kalimat1.replace(/a/g,"")
// var  pjgKal2=kalimat2.length

// var selisih=pjgKal1-pjgKal2

// console.log(kalimat1+ " memiliki huruf a sebanyak : " + selisih)
// console.log("\n")


// // solve it 8
// console.log("solution 8:")

// var waktu = (120 / (60 + 40)) * 60 //menit

// var jam =9+ Math.floor(waktu/60)
// var menit = waktu%60

// console.log("Tabrakan pada pukul :"+jam+"."+menit);
// console.log("\n")


// // solve it 10
// console.log("solution 10:")

// var inputNum= 43

// if(inputNum%2==0){
//     console.log("angka "+ inputNum+" termasuk bilangan Genap")
// }
// else{
//     console.log("angka "+ inputNum+" termasuk bilangan Ganjil")
// }
// console.log("\n")

// // solve it 11
// console.log("solution 11:")

// var today= new Date()
// var bulan=today.getMonth()+1
// var bulanChar

// if(bulan==1){
//      bulanChar=Januari
//     console.log("saat ini bulan "+bulan+" : Januari")
// }
// else if(bulan==2){
//     bulanChar=Febuari
//     console.log("saat ini bulan "+bulan+" : Febuari")
// }
// else if(bulan==3){
//     bulanChar=Maret
//     console.log("saat ini bulan "+bulan+" : Maret")
// }
// else if(bulan==4){
//     bulanChar=April
//     console.log("saat ini bulan "+bulan+" : April")
// }
// else if(bulan==5){
//     bulanChar=Mei
//     console.log("saat ini bulan "+bulan+" : Mei")
// }
// else if(bulan==6){
//     bulanChar=Juni
//     console.log("saat ini bulan "+bulan+" : Juni")
// }
// else if(bulan==7){
//     bulanChar=Juli
//     console.log("saat ini bulan "+bulan+" : Juli")
// }
// else if(bulan==8){
//     bulanChar=Agustus
//     console.log("saat ini bulan "+bulan+" : Agustus")
// }
// else if(bulan==9){
//     bulanChar=September
//     console.log("saat ini bulan "+bulan+" : September")
// }
// else if(bulan==10){
//     bulanChar=Oktober
//     console.log("saat ini bulan "+bulan+" : Oktober")
// }
// else if(bulan==11){
//     bulanChar=November
//     console.log("saat ini bulan "+bulan+" : November")
// }
// else if(bulan==12){
//     bulanChar=Desember
//     console.log("saat ini bulan "+bulan+" : Desember")
// }

// console.log("\n")


// // solve it 12a
// console.log("solution 12a:")

// var hari= today.getDay()+1
// var hariChar

// if(hari==1){
    
//     console.log("Hari ini Senin,")


// solve it 16
console.log("solution 16:")

var x=0,z=""

for(x;x<5;x++){
    z=z+"* "
    console.log(z)
}
console.log("\n")


// solve it 17
console.log("solution 17:")

var x=0,z="",limit=5

for(x;x<limit;x++){
    for(y=0;y<(limit-x);y++){
        z=z+"* "
    }
    console.log(z)
    z=""
}
console.log("\n")


// solve it 18
console.log("solution 18:")

var x=0,z="",limit=5

for(x;x<limit;x++){
    for(y=0;y<(limit-x);y++){
        z=z+"* "
    }

    console.log(z)
    
    if(x==(limit-1)){
        for(x=0;x<limit;x++){
            z=z+"* "
            console.log(z)
        }
    }
    z=""
}
console.log("\n")


// solve it 19
console.log("solution 19:")

var x=0,z1="",limit=5

for(x;x<=limit;x++){
    for(y=0;y<(limit-x);y++){
        z1=z1+"  "
    }

    for(y=0;y<=limit-(limit-x);y++){
        z1=z1+"* "
        if(y!=0){
            z1=z1+"* "
        }
    }

    console.log(z1)
    z1=""
}
console.log("\n")

// solve it 20
console.log("solution 20:")

var x=0,z1="",limit=10

for(x;x<=limit;x++){

    if(x!=0){
        for(i=0;i<limit-(limit-x);i++){
            z1=z1+"  "
        }
    }

    for(y=0;y<=(limit-x);y++){
        z1=z1+"* "
        if(y<(limit-x)){
            z1=z1+"* "
        }
    }
    console.log(z1)
    z1=""
}

console.log("\n")


// solve it 21
console.log("solution 21:")

var x=0,z1="",limit=5

for(x;x<=limit;x++){
    for(y=0;y<=(limit-x);y++){
        z1=z1+"  "
    }

    for(y=0;y<=limit-(limit-x);y++){
        z1=z1+"* "
        if(y!=0){
            z1=z1+"* "
        }
    }

    console.log(z1)
    z1=""
}
for(y=0;y<limit+1;y++){
    z1=z1+"* * "
    if(y==limit){
        z1=z1+"* "
    }
}
console.log(z1)

z1=""
for(x=0;x<=limit;x++){

    //if(x!=0){
        for(i=0;i<=limit-(limit-x);i++){
            z1=z1+"  "
        }
    //}

    for(y=0;y<=(limit-x);y++){
        z1=z1+"* "
        if(y<(limit-x)){
            z1=z1+"* "
        }
    }
    console.log(z1)
    z1=""
}

console.log("\n")
