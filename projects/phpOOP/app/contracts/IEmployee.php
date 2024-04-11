<?php

interface IEmployee
{
    const SAYI = 125;

    /* 
    * bir class 1 den fazla interface ten implements edilebilinir
    * yalnizca public fonklar bulunmak zorunda ve bu fonks lar soyut olmak zorunda '{}' yok. 
    * yalnizca sabit veya static degiskenler tanimlanabilir.
    * burada verilmis fonksiyonlar, kullanilan barindirilmak zorunda
    */

    function getSalary(): float;
    function setSalary(float $salary): self;
}