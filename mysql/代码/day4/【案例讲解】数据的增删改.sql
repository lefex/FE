#1.	运行以下脚本创建表my_employees

USE myemployees;
CREATE TABLE my_employees(
	Id INT(10),
	First_name VARCHAR(10),
	Last_name VARCHAR(10),
	Userid VARCHAR(10),
	Salary DOUBLE(10,2)
);
CREATE TABLE users(
	id INT,
	userid VARCHAR(10),
	department_id INT

);
#2.	显示表my_employees的结构
DESC my_employees;

#3.	向my_employees表中插入下列数据
ID	FIRST_NAME	LAST_NAME	USERID	SALARY
1	patel		Ralph		Rpatel	895
2	Dancs		Betty		Bdancs	860
3	Biri		Ben		Bbiri	1100
4	Newman		Chad		Cnewman	750
5	Ropeburn	Audrey		Aropebur	1550

#方式一：
INSERT INTO my_employees
VALUES(1,'patel','Ralph','Rpatel',895),
(2,'Dancs','Betty','Bdancs',860),
(3,'Biri','Ben','Bbiri',1100),
(4,'Newman','Chad','Cnewman',750),
(5,'Ropeburn','Audrey','Aropebur',1550);
DELETE FROM my_employees;
#方式二：

INSERT INTO my_employees
SELECT 1,'patel','Ralph','Rpatel',895 UNION
SELECT 2,'Dancs','Betty','Bdancs',860 UNION
SELECT 3,'Biri','Ben','Bbiri',1100 UNION
SELECT 4,'Newman','Chad','Cnewman',750 UNION
SELECT 5,'Ropeburn','Audrey','Aropebur',1550;

				
#4.	 向users表中插入数据
1	Rpatel	10
2	Bdancs	10
3	Bbiri	20
4	Cnewman	30
5	Aropebur	40

INSERT INTO users
VALUES(1,'Rpatel',10),
(2,'Bdancs',10),
(3,'Bbiri',20);




#5.将3号员工的last_name修改为“drelxer”
UPDATE my_employees SET last_name='drelxer' WHERE id = 3;



#6.将所有工资少于900的员工的工资修改为1000
UPDATE my_employees SET salary=1000 WHERE salary<900;

#7.将userid 为Bbiri的user表和my_employees表的记录全部删除

DELETE u,e
FROM users u
JOIN my_employees e ON u.`userid`=e.`Userid`
WHERE u.`userid`='Bbiri';

#8.删除所有数据

DELETE FROM my_employees;
DELETE FROM users;
#9.检查所作的修正

SELECT * FROM my_employees;
SELECT * FROM users;

#10.清空表my_employees
TRUNCATE TABLE my_employees;







