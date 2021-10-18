import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Dimensions,useWindowDimensions,StyleSheet, Text,Button, Alert, Platform, View, Image,SafeAreaView } from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));//does not notice orientation 
  console.log(require("./assets/icon.png"))
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor:'dodgerblue',
      width:'100%',
      height:'30%',
    }}>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
