import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import NewRoutine from './NewRoutine';

const Container = ({ navigation }) => {
    // console.log(props.navigation);
    return (
      <View style={styles.container}>
        <Text>You've Done Workouts this Week!</Text>
        <TouchableOpacity title="navigate to New Routine"
        onPress={() => navigation.navigate("NewRoutine")}
        style={ {backgroundColor: '#66CDAA', position: 'absolute', top: 150} }>
          <Text style={{ fontSize: 20, color: '#000'}}>Add A Routine!</Text>
        </TouchableOpacity>
        <TouchableOpacity title="navigate to Add Workout"
        onPress={() => navigation.navigate("AddWorkout")}
        style={ {backgroundColor: '#66CDAA', position: 'absolute', bottom: 200} }>
          <Text style={{ fontSize: 20, color: '#000'}}>Add A Workout!</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Container;