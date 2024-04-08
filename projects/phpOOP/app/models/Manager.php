<?php
class Manager extends Employee
{
    public function __construct(int $age)
    {
        parent::__construct($age);
    }
}