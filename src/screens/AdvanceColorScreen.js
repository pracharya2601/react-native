import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorPicker from '../../src/components/ColorPicker';

const COLOR_INCREMENT = 15;

const AdvanceColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (stateVal, setStateVal, change) => {
        return stateVal + change > 255 || stateVal + change < 0 ? null : setStateVal(stateVal + change);
    }

    return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ColorPicker 
                        onIncrease={() => setColor(red, setRed, COLOR_INCREMENT)} 
                        onDecrease={() => setColor(red, setRed, -1 * COLOR_INCREMENT)} 
                        color="Red" 
                    />
                    <ColorPicker 
                        onIncrease={() => setColor(green, setGreen, COLOR_INCREMENT)} 
                        onDecrease={() => setColor(green, setGreen, -1 * COLOR_INCREMENT)}
                        color="Green"
                    />
                    <ColorPicker 
                        onIncrease={() => setColor(blue, setBlue, COLOR_INCREMENT)} 
                        onDecrease={() => setColor(blue, setBlue, -1 * COLOR_INCREMENT)}
                        color="Blue" 
                    />
                </View>
                <View  style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: "60%", width: '100%', flex:1}}>
                    <Text style={{textAlign: 'center', backgroundColor: 'white', height: 20, width: 130, color: 'black', alignSelf: 'center'}}>rgb({red}, {green}, {blue})</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    subContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default AdvanceColorScreen;