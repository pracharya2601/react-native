import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
        <ScrollView style={styles.view}>
            <ImageDetail title="Mountain" image={require('../../assets/images/mountain.jpg')} imgScore="10"/>
            <ImageDetail title="Lake" image={require('../../assets/images/lake.jpg')} imgScore="9" />
            <ImageDetail title="City" image={require('../../assets/images/city.jpg')} imgScore="10" />
            <ImageDetail title="Forest" image={require('../../assets/images/forest.jpg')} imgScore="8"/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'grey'
    }
})

export default ImageScreen;