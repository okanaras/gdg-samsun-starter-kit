<?php

require("../app/models/Employee.php");
require("../app/models/Manager.php");

// $employee = new Employee(25); // nesne ornegi : instance 

// $employee->setFirstname("Sercan")->setLastname("Ozen"); // zincirleme fonk vermemizin sebebi setter da return olarak sinifin kenidisini dondugumuz icin.

// echo $employee->getFirstname() . ' ' . $employee->getLastname() . ' ' . $employee->getAge() . ' yasindadir.';

echo '<hr>';

$manager = new Manager(20);

$manager->setFirstname("ahmet");

echo $manager->getFirstname();