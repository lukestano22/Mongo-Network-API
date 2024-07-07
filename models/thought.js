const { Schema, model } = require('mongoose')
const User = require('./user')
const Reaction = require('./reaction')


const thoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        minlength: 1,
        maxlength: 280,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
})

thoughtSchema
    .virtual('reactionCount')
    .get(function(){
        return this.reactions.length
    })

const Thought = model('thought', thoughtSchema)

module.exports = Thought