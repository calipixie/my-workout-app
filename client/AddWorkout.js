import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WorkoutCard from './WorkoutCard';
import { ajax } from 'jquery';

const addNewWorkout = (workout) => {
    ajax({
        method: 'POST',
        url: '/fit',
        data: workout,
    })
}
const AddWorkout = () => {
    useEffect(() => {

    })
    return (
        <View style={styles.container}> 
            <Text>Did You Workout Today? Let's Add A Workout!</Text>
        <View style={styles.cards}>
            <WorkoutCard muscleGroup="Arms" repsAndWeight="3x10 @ 125" sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Chest" repsAndWeight="4x10 @ 125" sets={["10", "10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Shoulders" repsAndWeight="10x10 @ 125" sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Core" repsAndWeight="5x10 @ 125" sets={["10", "10", "10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Back" repsAndWeight="3x10 @ 125" sets={["10", "10", "10"]}/>
            <WorkoutCard muscleGroup="Legs" repsAndWeight="5x10 @ 125" sets={["10", "10", "10", "10", "10"]}/>
        </View>
        <View style={styles.card}> 
        <TouchableOpacity
        title="Save Workout"
        style={styles.cards}
        onPress={() => alert('this will be saved to your record')}> 
        <Text>Save Workout</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
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
});

export default AddWorkout;