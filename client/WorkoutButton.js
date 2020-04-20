import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

class WorkoutButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            repStatus: '10',
            repCount: 0,
        }  
    }

    onPress = ()=> {
      this.state.repCount += 10;
        // alert('I was pressed!')
        console.log()
        this.setState({
            repStatus: 'X',
            repCount: this.state.repCount,
        })
        console.log(this.state.repCount)
    }
    
    render (){
    const {set} = this.props;
        return (
    <View>
        <Button title={this.state.repStatus || set}
        style={styles.bottomText}
        defaultValue={set}
        onPress={this.onPress}></Button>
    </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {

    }
})

export default WorkoutButton;