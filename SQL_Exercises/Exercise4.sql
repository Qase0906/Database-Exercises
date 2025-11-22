#EXERCISE 4

select count(*) from score

select max(score), min(score) from score

select SUBSTRING_INDEX(email, '@', -1) as domain, count(*) as total from score group by domain

select SUBSTRING_INDEX(email, '@', -1) as domain, avg(score) as average from score group by domain