const { Schema, model } = require('mongoose')

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Reaction = model('reaction', reactionSchema)

module.exports = Reaction