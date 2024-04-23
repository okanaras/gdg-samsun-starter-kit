<?php

namespace app\models;

use app\models\Employee;

class Manager extends Employee
{
    public function __construct(int $age)
    {
        parent::__construct($age);
    }

    public function calculateSalary(): float
    {
        $salary = ($this->getExperience() * 100) + $this->getSalary();
        return $salary;
    }

    /*
    * Emp de ayni fonk oldugu icin burda birakmamizin bi anlami yok sercan hoac sildi ben gormek icin yorumda birakiyorum.
    
        function getSalary(): float
        {
            parent::getSalary(); // parent ile sahip olunan sinifin cagirabiliriz. __cons ta old gibi.

            echo '<br>Manager getsalary calisti.<br>';
            return $this->salary;
        }


        function setSalary(float $salary): IEmployee
        {
            $this->salary = $salary;
            return $this;
        }
    */
}