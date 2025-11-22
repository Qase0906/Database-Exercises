
#EXERCISE 1

select * from students where name like '%d'

select * from students where email like '%@gmail.com'

select * from students where email l like '%o%'

select * from students where name like '____%'

select * from students where name = 'Nasteexo Abdi'



#EXERCISE 2

select * from students where email like '%@gmail.com' and id > 2

select * from students where name = 'Ayaan Mohamed' or name = 'Ciise'

select * from students where (name = 'Ayaan Mohamed' or name = 'Ciise') and id < 5;

select * from students where (name like 'A%' or name like '%d') and id > 4

update students set name = 'Abdisamed' where id = 12



#EXERCISE 3

select * from students order by id desc limit 2

select * from students where email like '%@gmail.com' order by name

select name as student, email as email_address from students limit 1

select name as students_name from students order by name limit 5


#EXERCISE 4

select count(*) from score

select max(score), min(score) from score

select SUBSTRING_INDEX(email, '@', -1) as domain, count(*) as total from score group by domain

select SUBSTRING_INDEX(email, '@', -1) as domain, avg(score) as average from score group by domain


#EXERCISE 5

select students.name, course.title from enrollements 
join students on student_id = students.id
join course on course_id = course.id


select students.name, course.title from students
left join enrollements on students.id = student_id 
left join course on enrollements.course_id = course.id


select course.title as course, 
		GROUP_CONCAT(students.name) as students_name, 
		count(students.name) as number_of_students 
	from course 
		left join enrollements on course.id = course_id 
		left join students on students.id = enrollements.student_id
		group by course.title
		order by students_name 
	


















