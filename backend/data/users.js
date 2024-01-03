import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Miceal Scott',
    email: 'micheal@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Jim Halpert',
    email: 'jim@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default users;
