import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput 
                style={styles.input}
                textContentType="none"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => setName(value)}
            />
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true} //similar to type password
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => setPass(value)}
            />
            {pass.length < 4 && pass.length > 0 ? <Text>Must be more than 4 character</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1,
        padding: 0
    }
})

export default TextScreen;