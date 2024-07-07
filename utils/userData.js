const { mongoose } = require('../config/connection')
const User = require('../models/user')

const UserData = [
    {
        username: 'LukeStano22',
        email: 'lukestano22@gmail.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'MadyWulf',
        email: 'madywulf@gmail.com',
        thoughts: [],
        friends: [],
    }
]

async function dbData(){
    try{
        await User.deleteMany({})
        await User.create(UserData)
        console.log('user created succesfully')
    }catch(err){
        console.error(err)
    }
}
dbData()

module.exports = UserData