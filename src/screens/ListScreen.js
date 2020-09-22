import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableHighlight} from 'react-native'

const ListScreen = () => {
    const users = [
        {key: 'item1', name: "nakkali"},
        {key: 'item2', name: "nakkali 2"},
        {key: 'item3', name: "new line"},
        {key: 'item4', name: "List of data"},
        {key: 'item5', name: "Changed"},
    ]

    const countries = [
        {key: '1', name: 'United States'},
        {key: '2', name: 'Canada'},
        {key: '3', name: 'England'},
        {key: '4', name: 'India'},
        {key: '5', name: 'China'},
        {key: '6', name: 'Nepal'},
    ]
    return (
        <View>
            <FlatList
                horizontal //horizonral scrool
                showsHorizontalScrollIndicator={false} //remove scroolbar
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text style={style.textStyle}>{item.name}</Text>
                    </View>  
                )}
            />
            <FlatList
                vertical 
                data={countries}
                renderItem={({ item }) => (
                    <View>
                        <Text style={style.countryTextStyle}>{item.name}</Text>
                    </View>  
                )}
            />
        </View>


    )
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        padding: 10
    },
    countryTextStyle: {
        marginVertical: 40,
        padding: 3
    }
})

export default ListScreen;