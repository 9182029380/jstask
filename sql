


### **Employee Management System - SQL Test**
**Instructions:** Answer all the questions based on the following three tables:  
- **Employees (Employee Details)**
- **Departments (Department Information)**
- **Salaries (Salary Details)**  

#### **Schema Definition**
```sql
CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(100) NOT NULL
);

CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(100) NOT NULL,
    DeptID INT,
    HireDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);

CREATE TABLE Salaries (
    SalaryID INT PRIMARY KEY,
    EmpID INT,
    SalaryAmount DECIMAL(10,2),
    Bonus DECIMAL(10,2),
    SalaryDate DATE,
    FOREIGN KEY (EmpID) REFERENCES Employees(EmpID)
);
```
---
-- Inserting Departments
INSERT INTO Departments (DeptID, DeptName) VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance'),
(4, 'Marketing'),
(5, 'Operations');

-- Inserting Employees
INSERT INTO Employees (EmpID, EmpName, DeptID, HireDate) VALUES
(101, 'Alice Johnson', 2, '2018-06-12'),
(102, 'Robert Smith', 3, '2019-08-21'),
(103, 'Emma Davis', 1, '2017-03-05'),
(104, 'Michael Brown', NULL, '2020-11-15'),
(105, 'Olivia Wilson', 5, '2021-04-23'),
(106, 'James Taylor', 2, '2016-12-30'),
(107, 'Sophia Moore', 4, '2019-07-19'),
(108, 'Benjamin Anderson', 3, '2018-09-11'),
(109, 'William Thomas', NULL, '2022-02-01'),
(110, 'Charlotte White', 1, '2020-01-10'),
(111, 'Daniel Harris', 2, '2015-05-22'),
(112, 'Ethan Martin', 4, '2016-08-09'),
(113, 'Mia Robinson', 5, '2023-05-14'),
(114, 'Harper Clark', 3, '2017-12-25'),
(115, 'Henry Lewis', 1, '2021-06-30'),
(116, 'Amelia Walker', 2, '2022-09-27'),
(117, 'Lucas Hall', 4, '2018-11-18'),
(118, 'Isabella Allen', NULL, '2019-03-02'),
(119, 'Alexander Young', 5, '2020-07-29'),
(120, 'Evelyn Scott', 3, '2018-02-14');

-- Inserting Salaries
INSERT INTO Salaries (SalaryID, EmpID, SalaryAmount, Bonus, SalaryDate) VALUES
(201, 101, 70000.00, 5000.00, '2023-12-01'),
(202, 102, 80000.00, 7500.00, '2023-11-15'),
(203, 103, 65000.00, 4000.00, '2023-10-10'),
(204, 105, 55000.00, 3500.00, '2023-09-05'),
(205, 107, 72000.00, 6000.00, '2023-08-20'),
(206, 109, NULL, NULL, NULL),  -- No salary assigned
(207, 110, 68000.00, 4500.00, '2023-07-30'),
(208, 112, 62000.00, 4200.00, '2023-06-14'),
(209, 114, 75000.00, 5000.00, '2023-05-29'),
(210, 115, 56000.00, 3000.00, '2023-04-10'),
(211, 116, 71000.00, 5800.00, '2023-03-18'),
(212, 118, NULL, NULL, NULL),  -- No salary assigned
(213, 119, 69000.00, 4700.00, '2023-02-25'),
(214, 120, 73000.00, 5500.00, '2023-01-08'),
(215, 104, NULL, NULL, NULL),  -- No salary assigned
(216, 106, 81000.00, 8200.00, '2023-10-22'),
(217, 108, 77000.00, 7300.00, '2023-11-06'),
(218, 111, 86000.00, 9000.00, '2023-12-15'),
(219, 113, 52000.00, 2700.00, '2023-08-03'),
(220, 117, 78000.00, 6000.00, '2023-07-19');


### **SQL Questions**

#### **1. Basic Queries**
1. Write an SQL query to retrieve all employees' names and their respective department names.
2. Fetch all employees who were hired before **January 1, 2020**.
3. Retrieve employee details where their name starts with the letter **‘A’**.
4. Display the **highest salary** from the Salaries table.
5. Get the count of employees in each department.

#### **2. Joins and Relationships**
6. Write a query to **list employees along with their department names** using a JOIN.
7. Retrieve **employees who do not have a department assigned**.
8. Get a list of employees along with their **salaries and bonus amounts** using a JOIN.

#### **3. Aggregation and Grouping**
9. Find the **total salary (including bonuses) paid to all employees**.
10. Find the **average salary** of employees in each department.
11. Display the total number of employees hired in each year.
12. Retrieve the department with the **highest number of employees**.

#### **4. Subqueries and Nested Queries**
13. Get the names of employees who **earn more than the average salary**.
14. Find employees who belong to the department with the **highest number of employees**.
15. Retrieve employees who have **never received a salary**.

#### **5. Constraints and Data Integrity**
16. Modify the `Employees` table to ensure that the `EmpName` field **cannot be NULL**.
17. Change the `Salaries` table to add a constraint that ensures `SalaryAmount` is always **greater than 0**.

#### **6. Transactions & Advanced Queries**
18. Write a query to **increase all salaries by 10%** but ensure changes **only commit if all updates succeed**.
19. How would you delete an employee from the `Employees` table while ensuring all related salary records are also deleted?
20. Write a query to find **the second highest salary** from the Salaries table.

---

😊