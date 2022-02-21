import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function Themescreen() {
  return (
    <View style={styles.container}>
      <Text>Theme screen</Text>
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

export default Themescreen