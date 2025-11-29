db.students.insertMany([
  {
    name: 'Abdisamed',
    age: 34,
    email: 'abdi@gmail.com',
    courses: ['React', 'Node.js'],
    city: 'Jigjiga',
    address: {
      phone: '0911275293',
      street: 'Main Street',
      district: 'Garabcase'
    },
    average: 89
  },
  {
    name: 'Abdirre',
    email: 'abdirre@hotmail.com',
    age: 20,
    courses: ['Javascript', 'MongoDB'],
    city: 'Jigjiga',
    address: {
      phone: '09151528..',
      street: 'Qomada Street',
      district: 'Qoordheere'
    }
    
  },
  {
    name: 'Hamze',
    age: 24,
    email: 'hamze@email.com',
    courses: ['Tailwind', 'React'],
    city: 'Jigjiga',    
  }
])