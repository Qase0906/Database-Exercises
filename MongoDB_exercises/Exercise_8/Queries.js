
// Find students older than 22
db.students.find({age: {$gt: 22}})

// Find students enrolled in react
db.students.find({courses: 'React'})

// Find students Whose name starts with 'S'
db.students.find({age: {$regex: /^A/}})

// Find students whose age is either 20 or 24
db.students.find({age: {$in: [20, 24]}})

// Find students who are not using gmail
db.students.find({email: {$not: /@Gmail\\.com$/}})

// Find students enrolled in React and older than 20
db.students.find({
    age: {$gt: 20},
    courses: 'React'
})

// Find students enrolled in React OR Node.js
db.students.find({
    $or: [
        {courses: 'React'},
        {courses: 'Node.js'}
    ]
})
