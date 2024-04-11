<?php

require "../app/contracts/IEmployee.php";
require "../app/traits/Logger.php";
require "../app/models/Employee.php";
require "../app/models/Manager.php";
require "../app/models/Account.php";
require "../app/models/Ik.php";


echo '<hr>';

$manager = new Manager(20);
$account = new Account(20);
$ik = new Ik(20);

$manager->setFirstname('Sercan')->setSalary(1000)->setExperience(15);
$account->setFirstname('Mustafa')->setSalary(2000)->setExperience(10);
$ik->setFirstname('Seda')->setSalary(3000)->setExperience(5);

echo "Manager " . $manager->getFirstName() . " " . $manager->calculateSalary() . " maas almaktadir. <hr>";
echo "Account " . $account->getFirstName() . " " . $account->calculateSalary() . " maas almaktadir. <hr>";
echo "Ik " . $ik->getFirstName() . " " . $ik->calculateSalary() . " maas almaktadir. <hr>";





// ornek kullanimlar
/*
// $employee = new Employee(25); // nesne ornegi : instance 

// $employee->setFirstname("Sercan")->setLastname("Ozen"); // zincirleme fonk vermemizin sebebi setter da return olarak sinifin kenidisini dondugumuz icin.

// echo $employee->getFirstname() . ' ' . $employee->getLastname() . ' ' . $employee->getAge() . ' yasindadir.';

// $manager->setFirstname("ahmet")->setSalary(95);
// echo $manager->getSalary();
*/