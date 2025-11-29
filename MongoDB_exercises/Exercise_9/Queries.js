
// use $set to update one email
db.students.updateOne(
    {name: 'MC Hamouda'},
    {$set: {email: 'mc@gmail.com'}}
)

// use $inc to increase points
db.students.updateOne(
    {name: 'Omar Tood'},
    {$inc: {points: 2}}
)

// use $push to add a new course
db.students.updateOne(
    {name: 'Sharafdin'},
    {$push: {courses: 'API'}}
)

// use $pull to remove a course
db.students.updateOne(
    {name: 'Sharafdin'},
    {$pull: {courses: 'API'}}
)

// BONUS

// use $inc, $set, and $push togather
db.students.updateOne(
    {name: 'Omar Tood'},
    {$set: {email: 'tood@email.com'}},
    {$push: {courses: 'API'}},
    {$inc: {points: 10}}
)