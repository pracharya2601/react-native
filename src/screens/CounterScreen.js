import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen =() => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Current Count</Text>
            <Text style={styles.text}>{counter}</Text>
            <View style={styles.btn}>
                <Button 
                    style={styles.btn} 
                    title="Increment" 
                    onPress={() => setCounter(counter + 1)}
                />
            </View>
            <View style={styles.btn}>
                <Button 
                    style={styles.btn} 
                    title="Decrement" 
                    onPress={() => setCounter( counter - 1)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        textAlign: 'center',
        padding: 20,
        fontSize: 30,
    },
    btn: {
        margin: 10
    }
})

export default CounterScreen;