#EXERCISE 3

select * from students order by id desc limit 2

select * from students where email like '%@gmail.com' order by name

select name as student, email as email_address from students limit 1

select name as students_name from students order by name limit 5