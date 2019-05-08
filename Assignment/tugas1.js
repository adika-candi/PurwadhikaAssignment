
//  tugas 1

// var namaSiswa=prompt("Nama siswa :")
// var mate = prompt("Input nilai Matematika :")
// var bIndo = prompt("Input nilai Bahasa Indonesia :")
// var bInggris = prompt("Input nilai Bahasa Inggris :")
// var IPA = prompt("input nilai Ilmu Pengetahuan Alam :")

// mate=parseInt(mate)
// bIndo=parseInt(bIndo)
// bInggris=parseInt(bInggris)
// IPA=parseInt(IPA)


// var avg=((mate + bIndo + bInggris + IPA)/4)
// var indexNilai
// var lulusan

//     if(avg >=85){
//         indexNilai="A"
//     }
//     else if(avg<85 && avg>=75){
//         indexNilai="B"
//     }
//     else if(avg<75 && avg>=66){
//         indexNilai="C"
//     }
//     else if(avg<65 && avg >=50){
//         indexNilai="D"
//     }
//     else if(avg<50){
//         indexNilai="E"
//     }

// switch(indexNilai){
//     case "A":
//         lulusan="Selamat anda dinyatakan, LULUS"
//         break
//     case "B":
//         lulusan="Selamat anda dinyatakan, LULUS"
//         break
//     case "C":
//         lulusan="Selamat anda dinyatakan, LULUS"
//         break
//     default:
//         lulusan="Mohon maaf anda, TIDAK LULUS"
// }

// alert("Nama Siswa : "+ namaSiswa +"\n"+ "Nilai Akhir : "+avg +"\n"+ "Indeks Nilai : "+indexNilai +"\n"+ lulusan )

// console.log("Nama Siswa : "+ namaSiswa);
// console.log("Nilai Akhir : "+avg)
// console.log("Indeks Nilai : "+indexNilai)
// console.log(lulusan)


//  tugas 2

// var pilihan,jumlah
// var lanjut
// var hAyam=25000, hIkan=50000, hSapi=75000
// var totalHarga=[0,0,0]
// var subTotal

// function numberCheck(check,limMax){
//     if(isNaN(check)==true){
//         alert("Pilihan hanya berupa angka, mohon masukkan pilihan angka yang benar.")
//         return false
//     }
//     else if(check>limMax||check<1){
//         alert("Pilihan hanya 1-"+limMax+", mohon masukkan pilihan yang benar.")
//         return false
//     } 
// }

// do{
//     do{
//         pilihan=prompt("Selamat datang di Pasar Online\nDaftar Menu:\n1. Ayam @ Rp.25.000\n2.Ikan @ Rp.50.000\n3. Sapi @ Rp.75.000")
//         pilihan=parseInt(pilihan)
        
//     }while(numberCheck(pilihan,3)==false)

//     do{
//         jumlah=prompt("Masukkan jumlah yang ingin dibeli :")
//         jumlah=parseInt(jumlah)
//     }while(numberCheck(jumlah,100)==false)

//     switch(pilihan){
//         case 1:
//         totalHarga[0]=totalHarga[0]+(hAyam*jumlah)
//         break
//         case 2:
//         totalHarga[1]=totalHarga[1]+(hIkan*jumlah)
//         break
//         case 3:
//         totalHarga[2]=totalHarga[2]+(hSapi*jumlah)
//         break
//     }

//     lanjut=confirm("Apakah anda ingin menambah belanjaan ?")

// }while(lanjut==true)

// subTotal=totalHarga[0]+totalHarga[1]+totalHarga[2]

// alert("Detail belanjaan :\n 1. Ayam\nRp.25.000 x "+(totalHarga[0]/hAyam)+" = "+totalHarga[0]+"\n 2. Ikan\nRp.50.000 x "+(totalHarga[1]/hIkan)+" = "+totalHarga[1]+"\n 3. Sapi\nRp.75.000 x "+(totalHarga[2]/hSapi)+" = "+totalHarga[2]+"\n\nTotal yang harus dibayar : Rp."+subTotal)

// var uangBayar

//     var tempBayar

// uangBayar=prompt("Masukkan jumlah uang yang akan dibayar : ")
// uangBayar=parseInt(uangBayar)
// if(uangBayar<subTotal){
//     do{
//         alert("Uang pembayaran anda kurang sebesar\nRp."+(subTotal-uangBayar))
//         tempBayar=prompt("Pembayaran anda kurang sebesar Rp."+(subTotal-uangBayar)  +"\nMasukkan jumlah pembayaran yang sesuai :")
//         tempBayar=parseInt(tempBayar)
//         uangBayar=uangBayar+tempBayar
//     }while(subTotal>uangBayar)
// }

// alert("Transaksi berhasil!")

// console.log("Data Belanjaan :")
// console.log("Ayam x "+(totalHarga[0]/hAyam)+" = Rp."+totalHarga[0])
// console.log("Ayam x "+(totalHarga[1]/hIkan)+" = Rp."+totalHarga[1])
// console.log("Ayam x "+(totalHarga[2]/hSapi)+" = Rp."+totalHarga[2])
// console.log("Total Harga : Rp."+subTotal)
// console.log("Jumlah yang dibayar : Rp."+uangBayar)
// console.log("Kembalian : Rp."+(uangBayar-subTotal))
// console.log()
// console.log("Terim kasih telah berbelanja, hati-hati..")
// 


// var factorial
// var number=5

// factorial=number
// for(i=1;i<number;i++){

//     factorial=factorial*(number-i)
    
// }

// console.log(factorial)

