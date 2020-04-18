import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddWorkout = () => {
    return (
        <View style={styles.container}> 
            <Text>Did You Workout Today? Let's Add A Workout!</Text>
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
});

export default AddWorkout;