const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
            'Please enter a valid email.',
        ],
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thoughts"
    }]
})

userSchema
    .virtual('friendCount')
    .get(function(){
        return this.friends.length
    })

const User = model('user', userSchema)

module.exports = User