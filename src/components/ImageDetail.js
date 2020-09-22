import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, image, imgScore}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>Score - {imgScore}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    }, 
    image: {
        width: '50%',
        height: 150,
        padding: 0
    } ,
    textContainer: {
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text:{
        color: 'white'
    }
})

export default ImageDetail;