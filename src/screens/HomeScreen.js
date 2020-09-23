import React from "react";
import {View,ScrollView, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <ScrollView>
      <Text style={styles.text}>This is Home Screen</Text>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Button 
          onPress={() => navigation.navigate('Components')}
          title="Component(Default Btn)"
        />
      </View>
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
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Go to Counter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Generate Color Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('AdvanceColor')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Advance Color Picker
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('TextInput')}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          Input Form
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
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
