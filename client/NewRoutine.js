import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewRoutine = () => {
        return (
            <View style={styles.container}>
                <Text>This is YOUR new Routine!</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9967A',
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default NewRoutine;