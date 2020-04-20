import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WorkoutHistory from './WorkoutHistory';
import AddWorkout from './AddWorkout';

// import NewRoutine from './NewRoutine';
// const routines = require('../data');

const Container = ({ navigation }) => {
  const [ count, setCount ] = useState(0);
    // console.log(props.navigation);
    return (
      <View style={styles.container}>
        <Text style={styles.font}>You've Done {count} Workouts this Week!</Text>
      <View style={styles.card}>

      </View>
        <View style={styles.box}>
        <TouchableOpacity style={styles.buttons} title="navigate to New Routine"
        onPress={() => navigation.navigate("NewRoutine")}
        style={{ position: 'absolute', top: 150 }}>
          <Text style={{ fontSize: 20, color: '#000'}}>Add A Routine!</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.box}>
        <TouchableOpacity title="navigate to Add Workout"
        onPress={() => navigation.navigate("AddWorkout")}
        style={{position: 'absolute', bottom: 200}}>
          <Text style={{ fontSize: 20, color: '#000'}}>Add A Workout!</Text>

        </TouchableOpacity>
        </View>

        <View style={styles.box}>
          {/* <WorkoutHistory routines={routines} navigation={navigation}/> */}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  font: {
    position: 'absolute',
    top: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    // position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
    box: {
      // backgroundColor: '#778899',
      alignItems: 'center',
    },
    card: {
      borderRadius: 3,
      backgroundColor: '#778899',
      shadowColor: '#000',
      shadowOffset:   { width: 2, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 1
    },
});

const routines = [
  {
      name: 'My First Routine',
      muscleGroups: {
          arms: 0,
          chest: 0,
          shoulders: 0,
          core: 0,
          back: 0,
          legs: 0,
      },
      cardioLevel: 0,
      goalHeartRate: 160,
      estimatedDuration: 55,
      type: 'Hiit',
  },{
      name: 'My Second Routine',
      muscleGroups: {
          arms: 0,
          chest: 0,
          shoulders: 0,
          core: 0,
          back: 0,
          legs: 0,
      },
      cardioLevel: 0,
      goalHeartRate: 160,
      estimatedDuration: 55,
      type: 'Hiit',
  },{
      name: 'My Third Routine',
      muscleGroups: {
          arms: 0,
          chest: 0,
          shoulders: 0,
          core: 0,
          back: 0,
          legs: 0,
      },
      cardioLevel: 0,
      goalHeartRate: 160,
      estimatedDuration: 55,
      type: 'Hiit',
  }
]

export default Container;