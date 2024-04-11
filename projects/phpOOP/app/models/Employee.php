<?php

/**
 * ! NOT: 
 * ? Acces Modifiers
 * public, protected, private 
 * * public : her yerden erisebilinir
 * * protected : Bulundugu sinif icerisidnen ya da turetildigi(extends) edildigi sinif icerisinden ulasilabilinir
 * * private : Yalnizca tanimlandigi sinif icerisinden ulasilabilinir.
 */

abstract class Employee implements IEmployee
{

    // Properties
    protected string $firstname;
    protected string $lastname;
    protected int $age;
    protected float $salary;
    protected int $experience = 1;

    public function __construct(int $age)
    {
        $this->age = $age;

        echo "Ben ilk calisirim <br><br>";
    }

    // getter
    public function getFirstname(): string
    {
        return $this->firstname;
    }

    // setter

    public function setFirstname(string $firstname): Employee
    {
        $this->firstname = $firstname; // classta tanimlanan property i, parametredeki degiskene esitle

        return $this; // fonk lari zincirleme olarak birbirine baglamak icin this ile modeli donduruduk

        //Donus tipine Employee de , self te verilebilinir
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): Employee
    {
        $this->lastname = $lastname;
        return $this;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;
        return $this;
    }

    abstract function calculateSalary(): float;
    // abstract fonk lar suslu parantez olmaz fonk basinda abstract olur. Anlami bu siniftan turetilmis bir sinif varsa o sinif bu fonksiyonu kullanmak zorunda.


    function getSalary(): float
    {
        // echo 'get salary calisti';
        return $this->salary;
    }


    function setSalary(float $salary): Employee
    {
        $this->salary = $salary;
        return $this;
    }

    function getExperience()
    {
        return $this->experience;
    }

    function setExperience(int $experience): Employee
    {
        $this->experience = $experience;

        return $this;
    }

    public function __destruct()
    {
        // echo '<br><br>Son ben calisirim';
    }
}
