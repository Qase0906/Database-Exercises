#EXERCISE 2

select * from students where email like '%@gmail.com' and id > 2

select * from students where name = 'Ayaan Mohamed' or name = 'Ciise'

select * from students where (name = 'Ayaan Mohamed' or name = 'Ciise') and id < 5;

select * from students where (name like 'A%' or name like '%d') and id > 4

update students set name = 'Abdisamed' where id = 12