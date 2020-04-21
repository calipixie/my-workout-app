import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WorkoutCard from './WorkoutCard';
import { ajax } from 'jquery';

class AddWorkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            workout: {}
        }
        this.addNewWorkout = this.addNewWorkout.bind(this);
        this.addWorkout = this.addWorkout.bind(this);
    }
    
addNewWorkout(workout){
    console.log(workout)
    ajax({
        type: 'POST',
        url: 'http://localhost:4000/fit',
        data: JSON.stringify({workout}),
        contentType: 'application/json',
        success: workout => console.log(workout),
        error: e => console.log(e)
    })
}

addWorkout(){
    let workout = {        
        "name": "My Weights Routine",
        "muscleGroup": {
            "arms": 20,
            "chest": 50,
            "shoulders": 30,
            "core": 25,
            "back": 125,
            "legs": 140
        },
        "cardioLevel": 1,
        "goalHeartRate": 155,
        "estimatedDuration": 45,
        "type": "Weight-Lifting"};
    alert(`this workout will be saved to your profile ${addWorkout}`)
    this.addNewWorkout(workout)
}
    render (){
        const newWorkout = {        
        "name": "My Weights Routine",
        "muscleGroup": {
            "arms": 20,
            "chest": 50,
            "shoulders": 30,
            "core": 25,
            "back": 125,
            "legs": 140
        },
        "cardioLevel": 1,
        "goalHeartRate": 155,
        "estimatedDuration": 45,
        "type": "Weight-Lifting"}
        return (
            <View style={styles.container}> 
        <Text style={styles.text}>{newWorkout.name}</Text>
        <Text>Cardio Level: {newWorkout.cardioLevel}</Text>
        <Text>Estimated Duration: {newWorkout.estimatedDuration}</Text>
        <Text>Workout Type: {newWorkout.type}</Text>
        <Text>Target Heart Rate: {newWorkout.goalHeartRate}</Text>
        <View style={styles.cards}>
            <WorkoutCard muscleGroup="Arms" repsAndWeight={`3x10 @ ${newWorkout.muscleGroup.arms}`} sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Chest" repsAndWeight={`4x10 @ ${newWorkout.muscleGroup.chest}`} sets={["10", "10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Shoulders" repsAndWeight={`4x10 @ ${newWorkout.muscleGroup.shoulders}`} sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Core" repsAndWeight={`4x10 @ ${newWorkout.muscleGroup.core}`}sets={["10", "10", "10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Back" repsAndWeight={`4x10 @ ${newWorkout.muscleGroup.back}`} sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Legs" repsAndWeight={`4x10 @ ${newWorkout.muscleGroup.legs}`} sets={["10", "10", "10", "10", "10"]}/>
        </View>
        <View style={styles.card}> 
        <TouchableOpacity
        title="Save Workout"
        value={this.newWorkout}
        style={styles.cards}
        onPress={() => {
            this.addWorkout()
            this.setState({ workout: newWorkout})
        }}> 
        <Text>Save Workout</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAA520',
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
            borderRadius: 3,
            backgroundColor: '#008B8B',
            shadowColor: '#000',
            shadowOffset:   { width: 2, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 1,
            flexDirection: 'column',
            padding: 5,
            margin: 3
      },
      text: {
          fontSize: 20,
          fontWeight: "bold"
      }
});

export default AddWorkout;