import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewRoutine = () => { 
const [ count, setCount ] = useState(0);
        return (
            <View style={styles.container}>
                <Button title="Add New Routine" onPress={() => setCount(count + 1)}/>
                <Text>This is YOUR new Routine! {count}</Text>
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
    },
    card: {
        // borderRadius: 3,
        // backgroundColor: '#778899',
        // shadowColor: '#000',
        // shadowOffset:   { width: 2, height: 2},
        // shadowOpacity: 0.3,
        // shadowRadius: 1
      },
})

export default NewRoutine;