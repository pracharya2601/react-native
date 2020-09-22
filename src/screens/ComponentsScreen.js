import React from 'react';
import {Text , StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Component Screen</Text>
            <Text>Component Screen</Text>
        </View>
        
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    viewStyle: {
        backgroundColor: 'teal',
        padding: 10,
        width: 100,
        borderRadius: 5
    }
})

export default ComponentsScreen;