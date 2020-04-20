import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import {set} from 'react-native-reanimated';

interface Props {
    muscleGroup: String,
    repsAndWeight: String,
    sets: String[],
}

const WorkoutCard = ({ muscleGroup, repsAndWeight, sets }) => {
    const [ text, setText] = useState('');
        return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topText}>{muscleGroup}</Text>
                <Text style={styles.topText}>{`${repsAndWeight}pounds`}</Text>
            
            </View>
            <View style={styles.bottomRow}>
            {sets.map((set, index) => {
                // if (set === 'x') {
                //     return <Text style={styles.bottomText}>x</Text>
                // }
                // if (set === '') {
                //     return <Text style={styles.bottomText} key={set + index}></Text>
                // }
                return (
                    <View key={set + index} style={styles.circle}>
                        <Button title={set}
                        style={styles.bottomText}
                        onPress={() => alert('one down!')}></Button>
                        {/* <Text style={styles.bottomText}>{set}</Text> */}
                    </View>
                )
            })}
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
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
      topRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 320,
      },
      topText: {
        fontSize: 20,
      },
      bottomRow: {
          flexDirection: 'row',
          justifyContent: 'space-evenly'
      },
      circle: {
          borderRadius: 75,
          padding: 20,
          backgroundColor: '#FFF8DC',
      },
    //   bottomText: {
    //       fontSize: 20,
    //       textDecorationColor: '#2F4F4F',
    //   }
      
})


export default WorkoutCard;
