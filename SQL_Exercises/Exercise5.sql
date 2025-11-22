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