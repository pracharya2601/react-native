import React from 'react';
import { Text, View,ScrollView, StyleSheet} from 'react-native';

const BoxModel = () => {
    return(
        <View>
            <ScrollView>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Box Model</Text>
                </View>
                <View style={styles.viewStyleFlex}>
                    <Text style={styles.textStyleFlex}>Child 1</Text>
                    <Text style={styles.textStyleFlex}>Child 2</Text>
                    <Text style={styles.textStyleFlex}>Child 3</Text>
                </View>
                <View style={styles.viewStyleFlexChild}>
                    <Text style={styles.textStyleFlexOne}>Flex 1</Text>
                    <Text style={styles.textStyleFlexTwo}>Flex none (fefault)</Text>
                    <Text style={styles.textStyleFlexThree}>Flex 2</Text>
                </View>
                <View style={styles.viewStyleFlexChild}>
                    <Text style={styles.textStyleOneFlex}>AlignSelf(overide the value of alignItems form parent component</Text>
                    <Text style={styles.textStyleTwoFlex}>AlignSelf- flex end</Text>
                    <Text style={styles.textStyleThreeFlex}>AlignSelf - center</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginHorizontal: 10,
        marginVertical: 20
    },
    viewStyleFlex: {
        borderWidth: 1,
        borderColor: 'green',

        //flex values for parent element
        alignItems: 'center', //default is stretch
        flexDirection: 'column',
        justifyContent: 'center',
        height: 400
    },
    textStyleFlex: {
        borderWidth: 1,
        borderColor: 'teal',
    },
    viewStyleFlexChild: {
        height: 400,
        marginBottom: 20
    },  
    textStyleFlexOne: {
        borderWidth: 1,
        borderColor: 'teal',
        flex: 1, //split into 1 part
    },
    textStyleFlexTwo: {
        borderWidth: 1,
        borderColor: 'teal',
    },
    textStyleFlexThree: {
        borderWidth: 1,
        borderColor: 'teal',
        flex: 2
    },
    textStyleOneFlex: {
        borderWidth: 1,
        borderColor: 'teal',

    },
    textStyleTwoFlex: {
        borderWidth: 1,
        borderColor: 'teal',
        alignSelf: 'flex-end'
    },
    textStyleThreeFlex: {
        borderWidth: 1,
        borderColor: 'teal',
        alignSelf: 'center'
    },

})

export default BoxModel;