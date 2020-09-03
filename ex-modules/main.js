const User = require('./models/user.model');
const UserService = require('./services/user.service')

const userService = UserService.getInstance()

userService.createUser('Omry', 'Hazut')
userService.createUser('Nir', 'Moshe')
userService.createUser('Dana', 'Ronen')

console.log(userService.readUsers())

const newUser = {
    id: 5555,
    firstName: 'Menashe',
    lastName: 'Noy'
}
console.log(userService.deleteUser(0))
console.log(userService.updateUser(1, newUser));
console.log(userService.readUsers())
console.log(userService.readUser(2));