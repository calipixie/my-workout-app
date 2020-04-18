import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewRoutine = () => { 
const [ counter, setCount ] = useState(0);
        return (
            <View style={styles.container}>
                <Button title="Add New Routine" onPress={() => setCount(counter + 1)}/>
                <Text>This is YOUR new Routine!</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9967A',
        position: 'relative',
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default NewRoutine;