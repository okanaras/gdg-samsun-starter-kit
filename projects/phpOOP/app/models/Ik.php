<?php
class Ik extends Employee
{


    public function calculateSalary(): float
    {
        return ($this->getExperience() * 20) + $this->getSalary();
    }
}