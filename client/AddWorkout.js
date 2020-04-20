import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';

const AddWorkout = () => {
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
    cards: {
        justifyContent: 'space-between',
      },
});

export default AddWorkout;