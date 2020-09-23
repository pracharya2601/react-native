import React, {useState, useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorPicker from '../../src/components/ColorPicker';

const COLOR_INCREMENT = 15;
//types
const CHANGE_RED = 'CHANGE_RED'
const CHANGE_GREEN = 'CHANGE_GREEN'
const CHANGE_BLUE = 'CHANGE_BLUE'

//another way 
//reducer function
const reducer = (state, action) => {
    switch(action.type){
        case CHANGE_RED:
            //rebuild entire state object
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                :{ ...state, red: state.red + action.payload};
        case CHANGE_GREEN:
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            :{ ...state, green: state.green + action.payload};
        case CHANGE_BLUE:
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            :{...state, blue: state.green + action.payload};
        default:
            return state;

    }
}


const AdvanceColorScreen = () => {

    //one way
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (stateVal, setStateVal, change) => {
    //     return stateVal + change > 255 || stateVal + change < 0 ? null : setStateVal(stateVal + change);
    // }

    //another way to manage state using useReducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ColorPicker 
                        //one way
                        // onIncrease={() => setColor(red, setRed, COLOR_INCREMENT)} 
                        // onDecrease={() => setColor(red, setRed, -1 * COLOR_INCREMENT)} 
                        onIncrease={() => dispatch({type: CHANGE_RED, payload: COLOR_INCREMENT })} 
                        onDecrease={() => dispatch({type: CHANGE_RED, payload: -1 * COLOR_INCREMENT })} 
                        color="Red" 
                    />
                    <ColorPicker 
                        onIncrease={() => dispatch({type: CHANGE_GREEN, payload: COLOR_INCREMENT })} 
                        onDecrease={() => dispatch({type: CHANGE_GREEN, payload: -1 * COLOR_INCREMENT })} 
                        color="Green"
                    />
                    <ColorPicker
                        onIncrease={() => dispatch({type: CHANGE_BLUE, payload: COLOR_INCREMENT })}
                        onDecrease={() => dispatch({type: CHANGE_BLUE, payload: -1 * COLOR_INCREMENT })}
                        color="Blue"
                    />
                </View>
                <View  style={{backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, height: "60%", width: '100%', flex:1}}>
                    <Text style={{textAlign: 'center', backgroundColor: 'white', height: 20, width: 130, color: 'black', alignSelf: 'center'}}>rgb({state.red}, {state.green}, {state.blue})</Text>
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