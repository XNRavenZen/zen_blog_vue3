---
title: Oracle数据库测验
---

1. EMPLOYEES表的结构如下
```sql
EMPLOYEE_ID  NUMBER       Primary Key
FIRST_NAME   VARCHAR2(25)
LAST_NAME    VARCHAR2(25)
```
下面哪些语句能够插入一条数据到表中？ 
   1. INSERT INTO employees VALUES  ( NULL, 'John', 'Smith');
   2. INSERT INTO employees( first_name, last_name) VALUES( 'John', 'Smith');
   3. INSERT INTO employees VALUES  ( '1000', 'John', NULL);   √
   4. INSERT INTO employees (first_name, last_name, employee_id) VALUES ( 1000, 'John', 'Smith');
   5. INSERT INTO employees (employee_id) VALUES (1000); √
   6. INSERT INTO employees (employee_id, first_name, last_name) VALUES  ( 1000, 'John', '  '); √
--- 
2. 评估下面的SQL语句：
```sql
SELECT ROUND(45.953, -1), TRUNC(45.936, 2) FROM dual;
```
查询出来的结果是下面哪一个？ 
   1. 46 和 45
   2. 46 和 45.93
   3. 50 和 45.93 √
   4. 50 和 45.9
   5. 45 和 45.93
   6. 45.95 和 45.93
---   
3. 下面那些是DML语句？
    1. COMMIT
    2. MERGE   √
    3. UPDATE  √
    4. DELETE  √
    5. CREATE
    6. DROP
---
4. 评估下面的SQL语句集：
```sql
  CREATE TABLE dept
  (deptno   NUMBER(2),
    dname     VARCHAR2(14),
    loc       VARCHAR2(13));
    ROLLBACK;
    DESCRIBE DEPT
```
下面关于这些语句集的描述哪个是正确的？ 
   1. DESCRIBE DEPT语句会显示DEPT表的结构；  √
   2. ROLLBACK语句释放了DEPT表所占用的存储空间；
   3. DESCRIBE DEPT语句报ORA-04043错误: DEPT对象不存在.
   4. 只有在ROLLBACK语句前添加COMMIT语句，DESCRIBE DEPT语句才能显示DEPT表的结构。

5. 评估下面的SQL语句：
```sql
SELECT ename, sal, 12*sal+100 FROM emp;
```
其中SAL列保存的是员工的月工资，为了计算年度补偿（月工资加上每月100奖金，乘以12），需要对上面的SQL语句做哪个语法变化？ 
   1. 不需要做语法变化就能达到目的。
   2. SELECT ename, sal, 12*(sal+100) FROM emp;   √
   3. SELECT ename, sal, (12*sal)+100 FROM emp; 
   4. SELECT ename, sal+100,*12 FROM emp; 
---
6. 检查创建ORDERS表的SQL语句：
```sql
CREATE TABLE orders( 
   SER_NO   NUMBER   UNIQUE,
   ORDER_ID NUMBER,
   ORDER_DATE  DATE  NOT NULL,
   STATUS   VARCHAR2(10)   CHECK(status IN ('CREDIT', 'CASH')),
   PROD_ID  NUMBER REFERENCES PRODUCTS(PRODUCT_ID),
   ORD_TOTAL   NUMBER,
   PRIMARY KEY (order_id, order_date)
);
```
执行完上述语句后，哪些列会被自动创建索引？ 
   1. SER_NO   √
   2. ORDER_ID
   3. STATUS
   4. PROD_ID
   5. ORD_TOTAL
   6. ORDER_ID和ORDER_DATE列的组合索引 √
---  
7. 检查EMP_DEPT_VU视图的结构：
```sql
Column Name           Type          Remarks
EMPLOYEE_ID    NUMBER         From the EMPLOYEES table
EMP_NAME       VARCHAR2(30)   From the EMPLOYEES table
JOB_ID         VARCHAR2(20)   From the EMPLOYEES table
SALARY         NUMBER         From the EMPLOYEES table
DEPARTMENT_ID  NUMBER         From the DEPARTMENTS table
DEPT_NAME      VARCHAR2(30)   From the DEPARTMENTS table
```
下面哪个SQL语句会产生错误? 
   1. SELECT * FROM   emp_dept_vu;
   2. SELECT department_id, SUM(salary) FROM emp_dept_vu GROUP BY department_id;
   3. SELECT department_id, job_id, AVG(salary) FROM emp_dept_vu GROUP BY department_id, job_id;
   4. SELECT job_id, SUM(salary) FROM emp_dept_vu WHERE department_id IN (10,20) GROUP BY job_id HAVING SUM(salary)&gt;20000;
   5. 以上SQL语句都是合法的，不会产出错误。  √
---
8. 评估下面的SQL语句：
```sql
SELECT
   e.EMPLOYEE_ID,
   e.LAST_NAME,
   e.DEPARTMENT_ID,
   d.DEPARTMENT_NAME
FROM EMPLOYEES e, DEPARTMENTS d
WHERE e.DEPARTMENT_ID = d.DEPARTMENT_ID;
```
在这个语句中，执行了SELECT语句的哪些功能？ 
   1. selection, projection, join   √
   2. difference, projection, join
   3. selection, intersection, join
   4. intersection, projection, join
   5. difference, projection, product
---
9. 如果要为STUDENTS表增加一个在STUDENT_ID列上的主键(primary key),STUDENTS表目前为空，下面哪个语句能够完成这个任务？ 
   1. ALTER TABLE students ADD PRIMARY KEY student_id;
   2. ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);
   3. ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;
   4. ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);   √
   5. ALTER TABLE students MODIFY CONSTRAINT stud_id_pk PRIMARY KEY (student_id);
---
10. 哪三个DATETIME数据类型可以用来作为列的类型定义？ 
    1. TIMESTAMP  √
    2. INTERVAL MONTH TO DAY
    3. INTERVAL DAY TO SECOND √
    4. INTERVAL YEAR TO MONTH √
    5. TIMESTAMP WITH DATABASE TIMEZONE
