DROP DATABASE IF EXISTS employeedb;
CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE employee(
    id INTEGER NOT NULL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    department VARCHAR(15),
    salary DECIMAL(6,2)
);

INSERT INTO employee VALUES(1, 'Leila', 'Hökki', 'ICT', 3000);
INSERT INTO employee VALUES(2, 'Matt', 'River', 'Admin', 7000);

DROP USER IF EXISTS 'fuh'@'localhost';
CREATE USER 'fuh'@'localhost' IDENTIFIED BY 'Suh@123!#';
GRANT ALL PRIVILEGES ON employeedb.* TO 'fuh'@'localhost';
