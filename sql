


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