import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import axios from "axios";
import { TWEET_API } from "../BASE_URL";

function Bookmarkscreen() {

  const [user, setUser] = React.useState();
  React.useEffect(() => {
    axios(TWEET_API).then((response) => { 
      setUser(response.data)
    })
    ;
  }, []);
  if (!user) return null;
  console.log(user.data.includes("attachments"))
  return (
    <View style={styles.container}>
      <Text>Bookmark screen</Text>
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

export default Bookmarkscreen
