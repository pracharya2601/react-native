import React from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>This is Home Screen</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Component"
      />
      <TouchableOpacity
      style={styles.btn}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Touchable Btn (Go to List Component)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Image')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Goto Image Card
        </Text>
      </TouchableOpacity>
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20
  },
  btn: {
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 5,
  }
});

export default HomeScreen;
