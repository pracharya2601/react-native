import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorPicker = (props) => {
    const {color, onIncrease, onDecrease} = props;
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', padding: 10}}>{color}</Text>
            <View style={styles.btnContainer}>
                <Button 
                    title={`Increase ${color}`} 
                    onPress={() => onIncrease()}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button 
                    title={`Decrease ${color}`} 
                    onPress={() => onDecrease()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
    },
    btnContainer: {
        marginTop: 5
    }
})

export default ColorPicker;