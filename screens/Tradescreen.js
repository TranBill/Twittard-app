import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

function Tradescreen() {
  return (
    <View style={styles.container}>
      <Text>Trading</Text>
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

export default Tradescreen