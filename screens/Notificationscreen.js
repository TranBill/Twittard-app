import { StyleSheet, Text, View,Alert} from 'react-native';
import React from 'react';
import { twittercolor,twitterdarkcolor } from '../utils/contansts';
import { FloatingAction } from 'react-native-floating-action';

function Notificationscreen() {
  return (
    <>
    <View style={styles.container}>
      <Text style={{textAlign:"left",color:'white',fontWeight:'bold'}}>There nothing here</Text>
    </View>
    <FloatingAction
          color={twitterdarkcolor}
          onPressMain={()=> Alert.alert('Deez Nutz')}
          showBackground={false}
          distanceToEdge={25}
          buttonSize={60}
        />
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:twittercolor
    }
});

export default Notificationscreen