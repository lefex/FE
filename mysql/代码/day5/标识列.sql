#标识列
/*
又称为自增长列
含义：可以不用手动的插入值，系统提供默认的序列值


特点：
1、标识列必须和主键搭配吗？不一定，但要求是一个key
2、一个表可以有几个标识列？至多一个！
3、标识列的类型只能是数值型
4、标识列可以通过 SET auto_increment_increment=3;设置步长
可以通过 手动插入值，设置起始值


*/

#一、创建表时设置标识列


DROP TABLE IF EXISTS tab_identity;
CREATE TABLE tab_identity(
	id INT  ,
	NAME FLOAT UNIQUE AUTO_INCREMENT,
	seat INT 


);
TRUNCATE TABLE tab_identity;


INSERT INTO tab_identity(id,NAME) VALUES(NULL,'john');
INSERT INTO tab_identity(NAME) VALUES('lucy');
SELECT * FROM tab_identity;


SHOW VARIABLES LIKE '%auto_increment%';


SET auto_increment_increment=3;




