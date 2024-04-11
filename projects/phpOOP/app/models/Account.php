<?php

namespace app\models;

use app\models\Employee;
use app\traits\Logger;


class Account extends Employee
{
    use Logger;

    public function calculateSalary(): float
    {
        $this->log(); // trait teki fonk eristik.

        return ($this->getExperience() * 50) + $this->getSalary();
    }
}