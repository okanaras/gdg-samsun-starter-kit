<?php

// func donusumlerine zorlama 
declare(strict_types=1);

use FontLib\Table\Type\name;

// hatalari gosterme nginx te veya burda yapilabilinir
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Merhaba" . PHP_EOL; // php_eol ile alt satira gecer
// echo "<br>"; //

$name = 'Sercan';
$lastname = 'özen';

echo  $name . ' ' . $lastname;
echo "<br><br>"; //


/**
 * STRING OPERATORLERI
 */

// 1. strlen() -> string length
echo '1. strlen() -> string length' . '<br>';
echo "'strlen()' fonk -> " . strlen($name) . '<br><br>';


// 2. strtoupper() && mb_strtouper -> string to uppercase
echo '2. strtoupper() && mb_strtouper() -> string to uppercase <br>';
echo strtoupper($lastname) . ' // "strtoupper()" turkce karakter olan harfleri duzgun cevirmez' . '<br>';
echo mb_strtoupper($lastname) . ' // "mb_strtouper()" turkce karakter olan harfleri de duzgun cevirir' . '<br><br>';


// 3. Sabit degerler define("degiskenAdi", "val")
echo  '3. Sabit degerler define("degiskenAdi", "val")' . '<br>';
define("SAYI", 25);
echo 'define("SAYI", 25); <br> output > ' . SAYI . '<br><br>';

// 4. Veri turleri - integer, double, string, array, boolean, null
// a- gettype() -> veri turunu verir
// b- is_integer(), is_string(), is_double(), is_bool(), is_array(), is_float(), is_null(), is_object(), is_numeric -> bool(true), bool(false) doner
// c- var_dump($degisken); ile bastigimizda hem veri turunu hem uzunlugunu hem de value sunu verir

$sayi = 1;
$name = 'sercan';
$lastname = 'ozen';
$sayi2 = 25.5;
$dizi = ['ankara', 'adana', 'izmir'];

$isActive = true;
$isActive = false;

$status = null;

echo  '4. Veri turleri' . '<br><br>';

echo '        // a- gettype() -> veri turunu verir';
echo 'gettype($sayi) : veri turunu ogrenme fonk >> ' . gettype($sayi) . '<br>';
echo 'gettype($name) : veri turunu ogrenme fonk >> ' . gettype($name) . '<br>';
echo 'gettype($sayi2) : veri turunu ogrenme fonk >> ' . gettype($sayi2) . '<br>';
echo 'gettype($dizi) : veri turunu ogrenme fonk >> ' . gettype($dizi) . '<br>';
echo 'gettype($isActive) : veri turunu ogrenme fonk >> ' . gettype($isActive) . '<br>';
echo 'gettype($status) : veri turunu ogrenme fonk >> ' . gettype($status) . '<br><br>';

echo '        // b- is_integer(), is_string(), is_double(), is_bool(), is_array(), is_float(), is_null(), is_object(), is_numeric -> bool(true), bool(false) doner' . '<br>';
var_dump(is_integer($sayi));
echo '<br>';
var_dump(is_integer($name));
echo '<br><br>';

echo '        // c- var_dump($degisken); ile bastigimizda hem veri turunu hem uzunlugunu hem de value sunu verir' . '<br>';
var_dump($lastname); // string(4) "ozen"
echo '<br><br>';

// 5. func deklerasyonu

function topla($sayi1, $sayi2)
{
    return $sayi1 + $sayi2;
}
function topla2($sayi1 = 15, $sayi2 = 30)
{
    return $sayi1 + $sayi2;
}

echo 'function topla($sayi1, $sayi2) {
        return $sayi1 + $sayi2;
    }' . '<br>';
echo "echo topla(25, 89);  >> ";
echo topla(25, 89);
echo '<br><br>';


echo 'function topla2($sayi1 =15, $sayi2=30) {
        return $sayi1 + $sayi2;
    }' . '<br>';
echo "echo topla2(sayi2:5);  >> ";
echo topla2(sayi2: 5);
echo '<br><br>';

// global kullanimi ile ilgili classtaki butun degiskenlere erisebiliriz, alternative olarak use() anahtar sozcugu ile de kullanilabilinir
function carp()
{
    global $sayi, $sayi2;

    return $sayi * $sayi2;
}

echo '// global kullanimi ile ilgili classtaki butun degiskenlere erisebiliriz' . '<br>';
echo carp();
echo '<br><br>';


// print_r($GLOBALS); // burada butun degiskenlerimiz key val seklinde array biciminde tutuluyor
// echo $GLOBALS['name'];

// ananom func deklar. Degsikene atandigi icin sonuna ; koyulmasi gerek

$printName = function ($name, $lastname) use ($dizi) {
    echo $name . ' ' . $lastname;
    echo '<br>';
    print_r($dizi);
    echo '<br><br>';
};

echo 'use() anahtar sozcugu ile global gibi disarda tanimlanmis degiskenlere ulasbiliriz' . '<br>';
echo '// ananom func deklar. Degsikene atandigi icin sonuna ; koyulmasi gerek', '<br>';
$printName('aydin', 'kucukoglu');

// isset fonk(), var mi yok mu (null mu degil mi) kontrolunu yapar. kisa kullanimi "??" sek dedir.

if (isset($dizi[1])) {
    echo 'var';
    echo '<br><br>';
} else {
    echo 'yok';
    echo '<br><br>';
}

echo $status ?? $name; // status varsa status yaz, yoksa name i yaz output : sercan
echo '<br><br>';


// tek satirda if kosulu
echo ($sayi2 > 30 ? ($sayi < 5 ? '2.if kosul icerisi true' : '2.if kosul icerisi false') : 'kucuk');
echo '<br><br>';


// switch case kullanimi
echo '// switch case kullanimi' . '<br>';
$gun = 3;

switch ($gun) {
    case 1:
        echo 'Pazartesi';
        break;

    case 2:
        echo 'Sali';
        break;

    case 3:
        echo 'Carsamba';
        break;

    default:
        echo 'Boyle gun yok';
        break;
}
echo '<br><br>';

// switch case alternatifi 'match' yapisi
echo '// switch case alternatifi match yapisi' . '<br>';
echo match ($gun) {
    1 => "ptesi",
    2 => 'sali',
    3 => 'car',
    default => 'gecersiz',
};
echo '<br><br>';


// array islemleri
$person = [
    'name' => 'ahmet',
    'lastname' => 'yilmaz',
    'address' => [
        'city' => 'van',
        'district' => 'ilce'
    ],
];

// $person['address']['city']; ile value lara erisebilirz

// dizi ye veri ekleme 
// 1- $diziAdi['key']= val;
// 2- $diziAdi[]= val; // otomotik olrak 0 indekse atama yapar
$person['age'] = 40;
$person[] = "new Val";
print_r($person);
echo '<br><br>';

// array length -> count()
echo count($person);

// sort($diziName); -> array i siralar
$sayilar = [5, 87, 3, 57, 12, 45, 8];

echo 'siralanmamis hali; <br>';
print_r($sayilar);
echo '<br>';

echo 'siralanmis hali; <br>';
sort($sayilar);
print_r($sayilar);
echo '<br><br>';

// array_reverse($diziName); -> array i tersine dondurur. Buarada farkli bir degiskene atamak gererk
$sayilar2 = array_reverse($sayilar);
print_r($sayilar2);
echo '<br><br>';

// array_keys($diziName); -> ilgili array in keylerini verir
$arrayKeys = array_keys($person);
print_r($arrayKeys);
echo '<br><br>';

// array_values($diziName); -> ilgili array in value larini verir
$arrayValues = array_values($person);
print_r($arrayValues);
echo '<br><br>';

// array_search(aranan, $arandigiDizi) -> ilgili dizide aranan var mi, ve varsa kacinci indekste
$arraySearch = array_search(897, $sayilar);
var_dump($arraySearch); // int(5) -> veri turu ve kacinci indekste oldugu
echo '<br><br>';

// in_array(aranan, $arandigiDizi) -> ilgili dizide aranan var mi yok mu, bool olarak true false doner
$arraySearch = in_array(57, $sayilar);
var_dump($arraySearch); // bool(true)
echo '<br><br>';

//? not : array search varsa kacinci indekte, in_array sadece var, yok

// array_shift($diziAdi) -> ilgili diziden ilk elemani cikarir.
// array_pop($diziAdi) -> ilgili diziden son elemani cikarir.
$arrayShift = array_shift($sayilar);
print_r($arrayShift); // siralanan dizideki ilk eleman olan 3'u cikardi
echo '<br><br>';


// array_slice($diziAdi, $baslangic,$uzunluk) -> baslangictan basla uzunluk kadar al.

$arraySlice = array_slice($sayilar, 2, 3); // 2.indekten basla 3 tane al
print_r($sayilar);
echo '<br>';
print_r($arraySlice);
echo '<br><br>';

// array_splice($diziAdi, $baslangic,$uzunluk) -> baslangictan basla uzunluk kadar al sil..
$arraySplice = array_splice($sayilar, 2, 3); // 2.indekten basla 3 tane al sil.
print_r($sayilar);
echo '<br>';
print_r($arraySplice);
echo '<br><br>';


// loops - donguler
$sayilar1 = [5, 10, 15, 20, 25];
$sayilar2 = [50, 20, 40, 35, 75];
$adres = [
    'city' => 'Istanbul',
    'district' => 'Kagithane'
];

// foreach
foreach ($adres as $key => $value) {
    echo $key . ' : ' . $value . '<br>';
}

// for
for ($i = 0; $i < count($sayilar2); $i++) {
    echo ($i + 1) . '. eleman: ' . $sayilar2[$i] . '<br>';
}

// while
$i = 0;
while ($i < 10) {
    echo $i . '<br>';
    $i++;
}
echo '<br><br>';

// func donusumlerine zorlama : bunun icin php tag acilfigi yerde 'declare(strict_types=1);' atamasini yapmamiz gerek

function topla3(int|float $sayi1, int $sayi2): float
{
    return $sayi1 + $sayi2;
}

echo topla3(50.1, 40); // declare verdigimiz icin zorladik
echo '<br><br>';

// void func return verilmedigi durumlardir
function voidFunc(int|float $sayi1, int $sayi2): void
{
    $result = $sayi1 + $sayi2;
}

echo voidFunc(5, 10); // void verdik 

echo '<br><br>';

/**
 ** Tur Donusumleri
 * ? donusturulmek istenen degiskenin basina (dataType) yazilir 
 */

// (int|float|double) to string
$name = '215';
$sayi = (int)$name;
$floatSayi = (int)$sayi;
$stringSayi = (int)$floatSayi;

var_dump($name);
echo '<br>';
var_dump($sayi);
echo '<br><br>';


// string to int
$number = 25;
$string = (string)$number;

var_dump($number);
echo '<br>';
var_dump($string);
echo '<br><br>';


// array to string implode('neye gore', $arr)
$adress = [
    'Istanbul',
    'Ankara'
];

$longAddress = implode(' - ', $adress);
var_dump($adress);
echo '<br>';
var_dump($longAddress); // string(17) "Istanbul - Ankara"
echo '<br><br>';

// string to array explode('neye gore', $string)

$shortAddress = explode('-', $longAddress);
var_dump($shortAddress); // string to array

echo '<br><br>';