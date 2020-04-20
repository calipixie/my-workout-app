const mongoose = require('mongoose');

const mongoURI = 'mongodb + srv://hiitlist:hiit@cluster0-rt13x.mongodb.net/test?retryWrites=true&w=majority'

const muscleSchema = new mongoose.Schema({
        arms: Number,
        chest: Number,
        shoulders: Number,
        core: Number,
        back: Number,
        legs: Number
})

const workoutSchema = new mongoose.Schema({
    id: Number,
    name: String,
    muscleGroup: [muscleSchema],
    cardioLevel: Number,
    goalHeartRate: Number,
    estimatedDuration: Number,
    type: String,
})


const Workout = mongoose.model('workout', workoutSchema)

module.exports = Workout;