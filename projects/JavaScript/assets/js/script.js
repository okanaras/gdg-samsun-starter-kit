/**
 * Degiskenler - Veri Tutucular & Scope Ozellikleri
 * Degiskenler verileri gecici olarak tutmamizi saglar
 * degisken tanimlama kurallari : rakam, ozel isaret ($ ve _ disinda) kullanilamaz
 */

// var name="Sercan Xoca";
// var age=25;
// var $firstName = "Sercan";

// console.log(name); // Sercan Xoca
// console.log(age);  // 25
// console.log( $firstName ); // Sercan
// console.log("--------------------");

/*********/

// DEGISKEN TANIMLAMA TURLERI:

/**
 ** var icin;
 *  - var ile tanimlanan degiskene her yerden ulasilabilirz (function scope adi verilir).
 *  - tekrar tanimlanabilinir
 *  - degeri guncelleyebiliriz
 */

//  var firstName= "Sercan";
//  console.log(firstName); // Aras

//  firstName= "Mehmet"; // degeri guncelledik
//  console.log(firstName); // Mehmet

//  var firstName= "Emre"; // tekrar tanimladik
//  console.log(firstName); // Emre
//  console.log("--------------------");

/**
 ** let icin;
 *  - yalnizca tanimlandigi {} arasinda erisilir (block scope).
 *  - tekrar tanimlanamaz!
 *  - degeri guncelleyebiliriz
 */

//  let lastName= "Ozen";
//  console.log(lastName); // Aras

//  lastName= "Yalcin"; // degeri guncelledik
//  console.log(lastName); // Yalcin

// //  let lastName= "Ozturk"; // tekrar tanimlanamaz
//  console.log(lastName); // Yalcin
//  console.log("--------------------");

/**
 ** CONST icin;
 *  - buyuk yazilir (const SOYAD)
 *  - yalnizca tanimlandigi {} arasinda erisilir (block scope).
 *  - tekrar tanimlanamaz!
 *  - degeri guncellenmez
 */

//  const CITY= "Istanbul";
//  console.log(CITY); // Istanbul

// //  CITY= "Yalcin"; // degeri guncellenmez
// //  const CITY= "Ozturk"; // tekrar tanimlanamaz
// //  console.log(CITY); // Istanbul
//  console.log("--------------------");

/*********/

// PRIMITIVE / SIFAT - ILKEL VERI TURU
/**
 * string, bigInt, Number(Int,Float), Boolean, Undifined
 * Ozellikleri:
 *  - Degerler dogrudan degiskenin kendisinde saklanir
 *  - Degerler degiskenden degiskene deger olarak aktarilir/kopyalanir
 *  - Kendilerine ait metodlari yoktur.
 */

// let sayi1= 10;
// let sayi2= sayi1;

// console.clear(); // onceki loglari temizler

// // console.log(sayi1, sayi2);

// sayi1= 20;

// console.log(sayi1); // 20
// console.log(sayi2); // 10 degismedi, referans tip olsaydi degisirdi

/*********/

// let sayi1= 15.50;
// let status = true;
// let status2 = false;

// console.clear(); // onceki loglari temizler
// console.log(sayi1, status, status2);

/*********/

// REFERANS / OBJECT - VERI TURU
/**
 * Array, Null, Date, Object
 * Ozellikleri:
 *  - Degerler hafizada bir referans(adres) olarak saklanir
 *  - Degerler degiskenden degiskene referans uzerinden gerceklesir. Yani saklanan verinin kendisi degil, verinin hafizadaki adresi aktarilir/kopyalanir.
 *  - Bu nedenle bir referans turundeki veri degistirildiginde bu degisiklik referans oldugu butun degiskenlere yansir
 *  - Kendilerine ait metodlari vardir.
 */

// let dizi1= [1,2,3];
// let dizi2 = dizi1;
// console.log(dizi1);
// console.log(dizi2);

// // dizinin sonuna eleman ekleme -> push(), basina ekleme unshift().

// dizi1.push(4);
// console.log(dizi1); // 2 sinde de 4 gozukur
// console.log(dizi2); // 2 sinde de 4 gozukur

// // dizinin sonundan eleman cikarma -> pop(), basindan cikarma shift().

// dizi2.pop();
// console.log(dizi1); // 2 sinde de 4 cikar
// console.log(dizi2); // 2 sinde de 4 cikar

/**
 * Bir dizinin referans olarak atanmasini istemiyorsak, yalnizca verinin kendisini kopyalamak istiyorsak ->
 */
// 1. Spread Operatoru
// ... nokta ile baslar

// let dizi1 = [1,2,3];
// let dizi2 = [...dizi1]; // dizi1 in kopyasini olustrudu

// dizi2.pop();

// console.log(dizi1);
// console.log(dizi2);  // yalnizca dizi 2 den eleman cikarildi

/**
 * 2. slice()
 */

// let dizi1 = [1,2,3];
// let dizi2 = dizi1.slice(); // dizi1 in kopyasini olustrudu

// dizi1.pop();

// console.log(dizi1);  // yalnizca dizi 1 den eleman cikarildi
// console.log(dizi2);

/**
 * 3. Array.from()
 */

// let dizi1 = [1,2,3];
// let dizi2 = Array.from(dizi1); // dizi1 in kopyasini olustrudu

// dizi1.push(6);

// console.log(dizi1);  // yalnizca dizi 1 e eleman ekledi
// console.log(dizi2);

/*********/

/**
 * Obje(Nesne) Tanimlama
 */

// var person = {
//   firstName: "Sercan",
//   lastName: "Ozen",
//   age: 22,
//   email: "oknaras@icloud.com",
//   address: {
//     city: "Istanbul",
//     district: "Esencilis",
//     postcode: 34522,
//   },
//   citiies: ["Istanbul", "Ankara"],
// };

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.address.city);
// console.log(person.citiies);
// console.log(person.citiies[0]);
// // console.log(person.citiies[4]); // undifined

// // veri turunu ogrenme php -> getType(name), js -> typeof name

// console.log(typeof  person.firstName); //string
// console.log(typeof  person.age); // number
// console.log(typeof  person.address); // obje
// console.log(typeof  person.citiies); // obje! dikkat array ler objedir

// let name = "Sercan";
// console.log(typeof name); // string

/*********/

/**
 * Func tanimlama
 *
 * 1- Func Deklarasyonu
 * 2- Func Expression
 * Arasindaki fark expression tanimlanmadan cagirilamaz!
 */

// 1- Func Deklarasyonu

function fullNameWrite() {
  // console.log("sercan xoca");
  // console.log(person.firstName +" "+ person.lastName); // js de birlestirme + ile yapilinir
}

fullNameWrite();

// 2- Func Expression
let fullNameYaz = function () {
  return "sercan xoca";
};

// console.log(fullNameYaz());

function toplama() {
  return 8 + 5;
}

// console.log(toplama());

/**
 * Parametreli Func
 */
function cikarma(a, b) {
  return a - b;
}

//   console.log(cikarma(1,5)); // -4 sonuc

//   let sayi1 = 428844;
//   let sayi2= 365498;

//   console.log(cikarma(sayi1,sayi2)); // 63346 sonuc

/*********/

/**
 * Tur donusumleri
 * 1- Sayisal Degerler
 *  - parseFloat(var), parseInt(var) = Number(var)
 * 2- String
 *  - String(var) ||  var.toString();
 */

// kullanicidan veri alma prompt()
// let sayi1 = prompt("Sayi 1 : ");
// let sayi2 = prompt("Sayi 2 : ");

// let sayi1= 100.4;
// let sayi2= "30";

/**
 *  String To Number(Int, Float)
 **/

// console.log(cikarma(sayi1,sayi2));

// console.log(typeof sayi1);

// sayi1 = Number(sayi1);
// sayi1 = parseFloat(sayi1);
// sayi1 = parseInt(sayi1);
// sayi2 = Number(sayi2);

// console.log(typeof sayi1);
// console.log( sayi1);
// console.log(typeof sayi2);

/**
 * Number To String
 */

// console.log(typeof sayi1);
// // sayi1 = String(sayi1);
// sayi1 = sayi1.toString();
// console.log(typeof sayi1);

/*********/

/**
 * Math Func
 */

// let sayi1 = 14.3;
// let sayi2 = 20.9;

// round : en yakin oldugu yere yuvarlar -> 24,6 = 25, 39,4= 39
// floor : her zaman asagi yuvarlar -> 24,8 = 24, 39,4= 39
// ceil : her zaman yukari yuvarlar -> 24,1 = 25, 39,4= 40

// let result = Math.round(sayi1);
// let result = Math.floor(sayi2);
// let result = Math.ceil(sayi1);

// let result = parseFloat(sayi1) + parseFloat(sayi2); // output : 35.2
// let result2 = parseInt(sayi1) + parseInt(sayi2); // output : 34
// let result3 = parseInt(sayi1) + parseFloat(sayi2); // int + float aliyor output : 34.9

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(parseInt(result3)); // en sonda int kismini aldik

/*********/

/**
 * OPERTATORLER
 * + - / *
 * % -> mod alma
 * ++ --
 * += , -= , *= , /=
 * == esittir
 * === esit ve denk(veri turu de esit or:stringToString, intToInt)
 * != esit degil
 * !== turu de esit degil
 * > < >= <=
 *
 */

// let sayi1 = 15;
// let sayi2 = 5;

// let result = sayi1 / sayi2;
// console.log(result); // output : 3

// result = sayi1 % 2;
// console.log(result); // output : 1  (mod alma sonucu)

// console.log(sayi1++); // once islem yap sonra arttir. (15)
// console.log(sayi1); // bir once arttirildigi icin (16)

// console.log(++sayi1); // once arttir sonra yaz (16)

// console.log(sayi1--);
// console.log(sayi1); //20

// sayi1 = sayi1 + sayi2; // sayi1+= sayi2 aynisi

// let sayi1 = 40;
// // let sayi2 = "40";
// let sayi2 = 40;
// console.log(sayi1 >= sayi2); //

/*********/

/**
 * KOSULLAR if & switch case
 */

let puan = 50;
let department = "MIS";

// if (puan >= 90){
//   console.log('tebrix not: A');
// }else if(puan >= 80){
//   console.log('tebrix not: B');
// }else if(puan >= 70){
//   console.log('tebrix not: C');
// }else if(puan >= 60){
//   console.log('tebrix not: D');
// }else{
//   console.log('ders calis not: F');
// }

// !! -> ve icin 2 tane &&, veya icin 2 tane ||
// if (puan > 70 && department === "MIS") {
//   console.log('NOT: B');
// }else if(puan > 60 || department === "MIS"){

//   console.log('NOT: C');
// }else{
//   console.log('NOT: F');
// }

// let tarih = new Date("2024-3-5"); icin yapilan ornek
// let tarih = new Date();
// console.log(tarih); // Tue Mar 05 2024 10:46:24 GMT+0300 (GMT+03:00)
// console.log(tarih.getDay()); // 2 --> Salı gününe karşılık gelir (pazar:0).
// console.log(tarih.getMonth()); // 2 --> Mart ayına karşılık gelir (0,1,2 diye basliyor aylarda).
// console.log(tarih.getFullYear( )); //--> 2024

// // switch case
// let gun = 7;
// console.log(gun);

// switch (gun) {
//   case 1:
//     console.log('pazartesi');
//     break;
//   case 2:
//     console.log('sali');
//     break;
//   case 3:
//     console.log('carsamba');
//     break;
//   case 4:
//     console.log('persembe');
//     break;
//   case 5:
//     console.log('cuma');
//     break;
//   case 6:
//     console.log('cumartesi');
//     break;
//   case 7:
//     console.log('pazar');
//     break;

//     default:
//     console.log('boyle bir gun yok');
//     break;
// }

/*********/

/**
 * DONGULER (LOOPS)
 * for, for in, while
 */

// // for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let sehirler = ["Istanbul", "Ankara", "Izmir"];
// console.log(sehirler);
// console.log(sehirler.length);

// for (let i = 0; i <= sehirler.length - 1; i++) {
//   console.log(sehirler[i]);
// }

// // for in
// var kisi = {
//   isim: "Ali", // objelerin key tarafi property(ozellik) o yuzden for in de
//   soyisim: "Kocak",
//   yaş: 25,
// };

// for (var ozellik in kisi) {
//   // console.log(ozellik); // property'leri yani key leri yazar
//   console.log(ozellik + ": " + kisi[ozellik]); // value'larını yazdirmak icin
// }

// // while
// let sayi = 10;
// while (sayi < 20) {
//   console.log(sayi++);
// }

/*********/

/**
 * try{} catch{}
 */
// let sehirler = ["Istanbul", "Ankara", "Izmir"];
// try {
//   console.log(sehirler2[5]);
// } catch (exception) {
//   console.log(exception); // ReferenceError: sehirler2 is not defined
//   console.log(exception.name); // ReferenceError
//   console.log(exception.message); // sehirler2 is not defined
//   console.error([1, 2, 3, 4], "okan"); // (4) [1, 2, 3, 4] 'okan'
//   console.warn(exception.name); // ReferenceError
// }

/*********/

/**
 * String Islemleri
 */

// // birlestirme -> '+', concate(param);

// let ad = "Okan";
// let soyad = "Aras";

// let tamAd = ad + " " + soyad;
// // tamAd = ad.concat(" - ", soyad, 5, " 35");
// // console.log(tamAd); // Okan - Aras5 35

// tamAd = ad.concat(" - ", soyad);
// console.log(tamAd);

// // char sayisi ogrenme length
// // console.log(tamAd.length); // 15

// // substring()
// // console.log(tamAd.substring(0, 8)); // 0'dan basla 8 karakter al (bosluk dahil)

/* 
  * string icinde search; 
    indexOf() bastan arar, 
    lastIndexOf() sondan arar, 
    olmadigi zamanda -1 dondurur
  */
// // console.log(tamAd.indexOf("n")); // output = 3 (n'nin basladigi nokta)

// let soyadBaslangic = tamAd.indexOf("a");
// let soyadBaslangic2 = tamAd.lastIndexOf("a");

// // console.log(tamAd.substring(soyadBaslangic)); // output : 'an - Aras' bastaki okan daki a dan itibaren basladi
// // console.log(tamAd.substring(soyadBaslangic2)); // output : 'as' sondaki Aras daki a dan itibaren basladi

// /**
//  * Replace(searchValue, replaceValue)
//  * find and replace methodu
//  */

// replacedName = tamAd.replace("Aras", "Test");
// console.log(replacedName); // Okan - Test

// /**
//  * Sirali ifadeleri bolme, split() etme (string to array)
//  */

// let metin = "elma, armut, ayva, erik";
// console.log(metin); //elma, armut, ayva, erik

// let meyveler = metin.split(",", 4); // virgulden sonraki degerleri diziye donduruyoruz
// console.log(meyveler); // (4) ['elma', ' armut', ' ayva', ' erik']

// /**
//  * trim()
//  */

// let fullName = "   Sercan Xoca             ";
// console.log(fullName); //    Sercan Xoca
// console.log(fullName.trim()); // Sercan Xoca
// console.log(fullName.trimStart()); // Sercan Xoca
// console.log(fullName.trimEnd()); //    Sercan Xoca

/*********/

/**
 * DIZILER ARRAY
 * birlestirme islemi -> concat() || or: array1.concate(array2);
 * eleman cikarma pop() -> sondan, shift() -> bastan, splice(index, howmany) -> silecegi index numarasindan itibaren kac tane cikaracagi
 * eleman ekleme push() -> sona ekler, unshift() -> basa ekler
 */

// let sinif = Array('items','...');
let sinif = ["Bilal", "Enes", "Okan", "Semih"];
let sinif2 = ["Yakup", "Rifat", "Ogulcan", "Emre"];

let result = sinif + sinif2; // stringsel olarak birlestirir.

// dizi birlestirme
let result2 = sinif.concat(sinif2); // dizisel olarak birlestir.
console.log(result); // output : Bilal,Enes,Okan,SemihYakup,Rifat,Ogulcan,Emre
console.log(result2); // output : (8) ['Bilal', 'Enes', 'Okan', 'Semih', 'Yakup', 'Rifat', 'Ogulcan', 'Emre']

// diziden eleman cikarma sondan icin pop(), bastan icin shift()

result2.shift(); // bastan eleman cikarir
result2.pop(); // sondan eleman cikarir
console.log(result2); // (6) ['Enes', 'Okan', 'Semih', 'Yakup', 'Rifat', 'Ogulcan']

let cikanlar = result2.splice(0, 2);
console.log(cikanlar);
// console.log(result2); // (4) ['Semih', 'Yakup', 'Rifat', 'Ogulcan']

// diziye eleman ekleme son icin push(), basa icin unshift()

/**
 * foreach dongusu callback fn alir(deger, key, arrayName)
 */
cikanlar.forEach(function (value, index, array) {
  result2.push(value); // sonuna eleman ekledik
});

result2.unshift("sercan"); // basina eleman ekledik
cikanlar = [];

console.log(cikanlar);
console.log(result2); // (7) ['sercan', 'Semih', 'Yakup', 'Rifat', 'Ogulcan', 'Enes', 'Okan']

// diziyi ters cevirme reverse()
console.log(result2.reverse()); // (7) ['Okan', 'Enes', 'Ogulcan', 'Rifat', 'Yakup', 'Semih', 'sercan']

// diziyi alfabetik && numerik olarak siralama -> sort()

console.log(result2.sort());

/**
 *  Map .map(callbackfn(value, key, array)) metodu bir dizi uzerinde dongu yapmamizi ve her bir eleman uzerinde bir islem gerceklestirdikten sonra sonuclari yeni bir diziye aktarmamizi saglar
 */

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "merit"];

let kareleri = sayilar.map(function (sayi) {
  if (typeof sayi != "string") {
    return sayi * sayi;
  } else {
    return 100 * 100;
  }
});

console.log(sayilar);
console.log(kareleri);

/**
 * Filter : .filter(callbackfn(value, key, array)) metodubir dizinin elemanlarini belirli bir kosula gore filtrelemesi
 *
 */
let filterelenmisSayilar = sayilar.filter(function (sayi) {
  return sayi > 5;
});

console.log(filterelenmisSayilar);

/*********/

/**
 * LOCAL STORAGE VE SESSION STORAGE
 */

/**
 * Local Storage ve Session Storage, web uygulamalarında veri saklamak için kullanılan iki önemli mekanizmadır.
 * Her ikisi de Web Storage API'nin bir parçasıdır ve tarayıcı tarafında anahtar-değer çiftleri şeklinde veri saklamanıza olanak tanır.
 * Fakat aralarında bazı farklar vardır:
 *
 * Local Storage
 * Tarayıcıyı kapatsanız bile veriler saklanır. Yani, veriler kalıcıdır.
 *     Aynı kökenden (origin) gelen tüm pencereler ve sekmeleler arasında paylaşılabilir.
 *     Veri guncellendikten sonra tekrar set edilmesi gerekir
 *     Local Storage, genellikle 5-10 MB arasında bir depolama limitine sahiptir (tarayıcıya bağlı olarak değişir).
 *
 * Session Storage
 * Bir sekme veya pencere kapatıldığında veriler silinir. Yani, veriler geçicidir.
 *     Yalnızca o sekme veya pencere içinde erişilebilir; farklı sekmeler veya pencereler arasında paylaşılamaz, hatta aynı kökenden gelseler bile.
 *     Depolama limiti genellikle Local Storage ile aynıdır.
 */

// // Local Storage
// let name = "Sercan Xoca";
// // veri set etme
// localStorage.setItem("fullname", name);
// name = "None Eylul";
// localStorage.setItem("fullname", name);

// // Session Storage
// // veri set etme
// // sessionStorage.setItem("ad", "none");
// // name = "None Eylul";
// let ad = sessionStorage.getItem("ad");

// // veri silme
// localStorage.removeItem("fullname");

// // butun verileri silme
// localStorage.clear();

// // veri get etme
// console.log(ad);

/**
 * Array i storage 'da tutma ve geri array olarak tur donusmu yapma
 */
// // let dizi = ["ahmet", "mehmet", "ilker", "sercan"];

// // localStorage.setItem("kisiler", dizi); // diziyi string olarak yazdim

// let kisiler = localStorage.getItem("kisiler");
// kisiler = kisiler.split(",");

// console.log(kisiler);
// console.log(typeof kisiler);

/**
 *
 */

var person = {
  firstName: "Sercan",
  lastName: "Ozen",
  age: 22,
  email: "oknaras@icloud.com",
  address: {
    city: "Istanbul",
    district: "Esencilis",
    postcode: 34522,
  },
  citiies: ["Istanbul", "Ankara"],
};

// // json to string => json.stringify()
// localStorage.setItem("person", JSON.stringify(person));

// // string to json =>  json.parse()
let person2 = JSON.parse(localStorage.getItem("person"));
// person2.JSON.parse(person2);
console.log(typeof person2, person2);

/*********/
