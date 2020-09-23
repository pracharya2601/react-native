import { AuthSession } from 'expo';
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Button, Text} from 'react-native';

const ColorScreen = () => {
    const [colors, SetColors] = useState([]); 

    return (
        <View style={{marginTop: 10, marginBottom: 70}}>
            <Button 
                title="Generate Random color"
                onPress={() => {SetColors([randomColorValue(), ...colors])}}
            />
            <View style={{marginTop: 10}}>
                <FlatList
                    keyExtractor={(item) => item}
                    data={colors}
                    renderItem={({item}) => (
                        <View style={{
                            backgroundColor: item,
                            height: 100, 
                            width: "auto",  
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                        >
                            <Text style={{backgroundColor: 'white', padding: 0, width: 200, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>{item}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const randomColorValue = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorScreen;