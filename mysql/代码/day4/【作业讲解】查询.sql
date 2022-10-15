#一、查询每个专业的学生人数
SELECT majorid,COUNT(*)
FROM student
GROUP BY majorid;

#二、查询参加考试的学生中，每个学生的平均分、最高分
SELECT AVG(score),MAX(score),studentno
FROM result
GROUP BY studentno;

#三、查询姓张的每个学生的最低分大于60的学号、姓名
SELECT s.studentno,s.`studentname`,MIN(score)
FROM student s
JOIN result r
ON s.`studentno`=r.`studentno`
WHERE s.`studentname` LIKE '张%'
GROUP BY s.`studentno`
HAVING MIN(score)>60;
#四、查询每个专业生日在“1988-1-1”后的学生姓名、专业名称

SELECT m.`majorname`,s.`studentname`
FROM student s
JOIN major m
ON m.`majorid`=s.`majorid`
WHERE DATEDIFF(borndate,'1988-1-1')>0
GROUP BY m.`majorid`;


#五、查询每个专业的男生人数和女生人数分别是多少

SELECT COUNT(*),sex,majorid
FROM student
GROUP BY sex,majorid;
#六、查询专业和张翠山一样的学生的最低分
#①查询张翠山的专业编号
SELECT majorid
FROM student
WHERE studentname = '张翠山'

#②查询编号=①的所有学生编号
SELECT studentno
FROM student
WHERE majorid=(
	SELECT majorid
	FROM student
	WHERE studentname = '张翠山'

)
#②查询最低分
SELECT MIN(score)
FROM result
WHERE studentno IN(

	SELECT studentno
	FROM student
	WHERE majorid=(
		SELECT majorid
		FROM student
		WHERE studentname = '张翠山'

	)
)

#七、查询大于60分的学生的姓名、密码、专业名

SELECT studentname,loginpwd,majorname
FROM student s
JOIN major m ON s.majorid=  m.majorid
JOIN result r ON s.studentno=r.studentno
WHERE r.score>60;
#八、按邮箱位数分组，查询每组的学生个数
SELECT COUNT(*),LENGTH(email)
FROM student
GROUP BY LENGTH(email);
#九、查询学生名、专业名、分数

SELECT studentname,score,majorname
FROM student s
JOIN major m ON s.majorid=  m.majorid
LEFT JOIN result r ON s.studentno=r.studentno


#十、查询哪个专业没有学生，分别用左连接和右连接实现
#左
SELECT m.`majorid`,m.`majorname`,s.`studentno`
FROM major m
LEFT JOIN student s ON m.`majorid` = s.`majorid`
WHERE s.`studentno` IS NULL;

#右
SELECT m.`majorid`,m.`majorname`,s.`studentno`
FROM student s
RIGHT JOIN  major m ON m.`majorid` = s.`majorid`
WHERE s.`studentno` IS NULL;
#十一、查询没有成绩的学生人数

SELECT COUNT(*)
FROM student s
LEFT JOIN result r ON s.`studentno` = r.`studentno`
WHERE r.`id` IS NULL










