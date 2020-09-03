const User = require('../models/user.model')

class UserService {
    static instance = null

    _users = []

    // Singleton Class
    static getInstance() {
        if (UserService.instance) { // not null
            return UserService.instance
        }
        UserService.instance = new UserService()
        return UserService.instance
    }

    createUser(firstName, lastName) {
        const id = this._users.length // "id generator"
        const newUser = new User(id, firstName, lastName)
        this._users.push(newUser)
        return newUser
    }

    readUsers() {
        return this._users
    }

    readUser(id) {
        return this._users.filter(user => user.id === id)
    }

    updateUser(id, newUser) {
        const user = this._users.find((user) => {
            return user.id === id
        })
        Object.assign(user, newUser)
    }

    deleteUser(id) {
        let indexInArray = 0
        this._users.find(function(user, index) {
            indexInArray = index
            return user.id === id
        })
        this._users.splice(indexInArray, 1)
    }
}

module.exports = UserService