

db.students.aggregate([

  {$unwind: '$courses'},

  {$match: {'courses.score': {$gt: 85}}},

  {
    $group: {
    	_id: '$courses.title',
      total: {$sum: 1}
  }
  },
  
  {
    $project: {
      course: '$_id',
      total: 1,
      _id: 0
    }
  },
  {$sort: {total: -1}}
])