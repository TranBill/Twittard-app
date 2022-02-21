import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

function Moneyscreen() {
  return (
    <View style={styles.container}>
      <Text>Make Money</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    }
})

export default Moneyscreen