import React from 'react';
import {View, StyleSheet} from 'react-native';

const LayoutScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.firstChild}></View>
                <View style={styles.secondChild}></View>
                <View style={styles.thirdChild}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.childFirst}></View>
                <View style={styles.childSecond}></View>
                <View style={styles.childThird}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 450,
        width: '100%',
        backgroundColor: 'teal'
    },
    container: {
        borderWidth: 1,
        borderColor: 'blue',
        marginVertical: 10
    },
    firstChild:{
        height: 70,
        width: 70,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'red'
    },
    secondChild: {
        height: 70,
        width: 70,
        backgroundColor: 'purple',
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        top: 0,
        right: 0
    },
    thirdChild: {
        height: 70,
        width: 70,
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'center'
    },
    childFirst: {
        height: 70,
        width: 70,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'red'
    },
    childSecond: {
        height: 70,
        width: 70,
        backgroundColor: 'purple',
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    childThird: {
            height: 70,
            width: 70,
            backgroundColor: 'orange',
            borderWidth: 1,
            borderColor: 'red',
            alignSelf: 'center'
    }


})

export default LayoutScreen