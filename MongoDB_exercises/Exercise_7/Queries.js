
// Find
db.students.find({name: 'Abdisamed'})

// updata student email
db.students.updateOne(
  {name: 'Abdisamed'},
  {$set: {email: 'abdisamed@gmail.com'}}
)


// Delete
db.students.deleteOne({name: 'Abdisamed'})



// what makes mongoDB schema-less

// MongoDB has no predefined table structure (is flexible)