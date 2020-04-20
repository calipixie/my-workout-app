import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// const routines = require('../data');

const WorkoutHistory = ({routines, navigation}) => {
    // console.log(routines);
    return (
    <View style={styles.container}>
        {
            routines.filter(routine => routine.type === 'Hiit').map(routine => (
                <TouchableOpacity title="GO to Previous Workout"
                style={{ borderWidth: 2, flexDirection: 'row', height: 20}}
                onPress={() => navigation.navigate("")}>
                    <Text>{routine.name}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        // borderColor: '#66CDAA',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})




export default WorkoutHistory;