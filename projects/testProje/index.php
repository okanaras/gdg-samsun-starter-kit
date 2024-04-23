<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//! include('path'); -> bir sayfayi dahil etmek icin kullanilir. Yazildigi kadar dahil eder.

//? include_once('path'); -> ne kadar yazilirsa yazilsin yalnizca 1 tane ekler. 
//* not: ..._once() lardan sonra include() kullanilirsa tekrardan ekler. 

//! require() ve require_once() ayni ozelliklere sahip.
//? ikisi arasindaki fark require da hata varsa, hatadan sonraki kisimlari gostermez. include gostermeye devam eder!!!

include("./layouts/header.php");
include_once("./layouts/header.php");

echo "CONTENT <hr>";

require("./layouts/footer.php");
require_once("./layouts/footer.php");