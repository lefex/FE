# 1. 查询工资最低的员工信息: last_name, salary

#①查询最低的工资
SELECT MIN(salary)
FROM employees

#②查询last_name,salary，要求salary=①
SELECT last_name,salary
FROM employees
WHERE salary=(
	SELECT MIN(salary)
	FROM employees
);

# 2. 查询平均工资最低的部门信息

#方式一：
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
#②查询①结果上的最低平均工资
SELECT MIN(ag)
FROM (
	SELECT AVG(salary) ag,department_id
	FROM employees
	GROUP BY department_id
) ag_dep

#③查询哪个部门的平均工资=②

SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary)=(
	SELECT MIN(ag)
	FROM (
		SELECT AVG(salary) ag,department_id
		FROM employees
		GROUP BY department_id
	) ag_dep

);

#④查询部门信息

SELECT d.*
FROM departments d
WHERE d.`department_id`=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	HAVING AVG(salary)=(
		SELECT MIN(ag)
		FROM (
			SELECT AVG(salary) ag,department_id
			FROM employees
			GROUP BY department_id
		) ag_dep

	)

);

#方式二：
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id

#②求出最低平均工资的部门编号
SELECT department_id
FROM employees
GROUP BY department_id
ORDER BY AVG(salary) 
LIMIT 1;

#③查询部门信息
SELECT *
FROM departments
WHERE department_id=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	ORDER BY AVG(salary) 
	LIMIT 1
);




# 3. 查询平均工资最低的部门信息和该部门的平均工资
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
#②求出最低平均工资的部门编号
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
ORDER BY AVG(salary) 
LIMIT 1;
#③查询部门信息
SELECT d.*,ag
FROM departments d
JOIN (
	SELECT AVG(salary) ag,department_id
	FROM employees
	GROUP BY department_id
	ORDER BY AVG(salary) 
	LIMIT 1

) ag_dep
ON d.`department_id`=ag_dep.department_id;



# 4. 查询平均工资最高的 job 信息
#①查询最高的job的平均工资
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC
LIMIT 1

#②查询job信息
SELECT * 
FROM jobs
WHERE job_id=(
	SELECT job_id
	FROM employees
	GROUP BY job_id
	ORDER BY AVG(salary) DESC
	LIMIT 1

);
# 5. 查询平均工资高于公司平均工资的部门有哪些?

#①查询平均工资
SELECT AVG(salary)
FROM employees

#②查询每个部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id

#③筛选②结果集，满足平均工资>①

SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary)>(
	SELECT AVG(salary)
	FROM employees

);

# 6. 查询出公司中所有 manager 的详细信息.
#①查询所有manager的员工编号
SELECT DISTINCT manager_id
FROM employees

#②查询详细信息，满足employee_id=①
SELECT *
FROM employees
WHERE employee_id =ANY(
	SELECT DISTINCT manager_id
	FROM employees

);

# 7. 各个部门中 最高工资中最低的那个部门的 最低工资是多少

#①查询各部门的最高工资中最低的部门编号
SELECT department_id
FROM employees
GROUP BY department_id
ORDER BY MAX(salary)
LIMIT 1


#②查询①结果的那个部门的最低工资

SELECT MIN(salary) ,department_id
FROM employees
WHERE department_id=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	ORDER BY MAX(salary)
	LIMIT 1


);
# 8. 查询平均工资最高的部门的 manager 的详细信息: last_name, department_id, email, salary
#①查询平均工资最高的部门编号
SELECT 
    department_id 
FROM
    employees 
GROUP BY department_id 
ORDER BY AVG(salary) DESC 
LIMIT 1 

#②将employees和departments连接查询，筛选条件是①
    SELECT 
        last_name, d.department_id, email, salary 
    FROM
        employees e 
        INNER JOIN departments d 
            ON d.manager_id = e.employee_id 
    WHERE d.department_id = 
        (SELECT 
            department_id 
        FROM
            employees 
        GROUP BY department_id 
        ORDER BY AVG(salary) DESC 
        LIMIT 1) ;

