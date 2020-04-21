import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import WorkoutButton from './WorkoutButton';
import {set} from 'react-native-reanimated';
import {render} from 'react-dom';
import {setConfigurationAsync} from 'expo/build/AR';


// interface Props {
//     muscleGroup: String,
//     repsAndWeight: String,
//     sets: String[],
// }

const WorkoutCard = ({ muscleGroup, repsAndWeight, sets }) =>{
    const [ count, setCount ] = useState(0);
    console.log(count)
    useEffect(() => {

    }, [])
    return (
            <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topText}>{muscleGroup}</Text>
                <Text style={styles.topText}>{`${repsAndWeight}pounds`}</Text>   
            </View>
            <View style={styles.bottomRow}>
            {sets.map((set, index) => {
                        return (
                            <View key={set + index} style={styles.circle}>
                        <WorkoutButton set={set} />
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
          borderRadius: 100,
          padding: 5,
          backgroundColor: '#FFF8DC',
      },
      finish: {
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#DC143C',
        justifyContent: 'center'
      }
})


export default WorkoutCard;
