import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function Listscreen() {
  return (
    <View style={styles.container}>
      <Text>List screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
});

export default Listscreen