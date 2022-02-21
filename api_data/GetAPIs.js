import React from "react";
import { View, Text, StyleSheet, Image, ScrollView,Alert} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {WindowWidth} from "../utils/Dimensions"
import GetUsers from "../URls/GetUsers";
import { Ionicons,Feather } from '@expo/vector-icons';
import { twittercolor, twitterdarkcolor } from "../utils/contansts";
import actions from "../utils/ActionButton";
import { FloatingAction } from "react-native-floating-action";

function GetAPIs() {
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    GetUsers({}).then((response) => { 
      setUsers(response.data)
      console.log(response.data)
    })
    ;
  }, []);

  if (!users) return null;

  const Profile = ({users})=>{

    return(
      <>

      <ScrollView style={{backgroundColor:twittercolor}} >
        {users.data.map((item)=>(
          <>
          <View  style={styles.cardView}>
          <Image key={item.profile_image_url} source={{uri : item.profile_image_url}} style={styles.image} />
          <Text key={item.name} style={styles.title}>
            {item.name}  
          </Text>
          <Text key={item.public_metrics.tweet_count} style={{color:'white',fontSize:10,alignSelf:'center',marginBottom:5}}>{item.public_metrics.tweet_count} Tweet</Text>
          <Text key={item.username} style={styles.description}> 
            @{item.username}
          </Text>
        </View>
  
        <View key={item.id} style={{backgroundColor:twittercolor,flex:1,justifyContent:'center',alignContent:'center',marginTop:15}}>

            <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
              id: <Text style={{color:'white'}}>{item.id}</Text>
            </Text>

            <Text style={{color:'#808080',marginLeft:30}}>
            Follower: <Text style={{color:'white'}}>{item.public_metrics.followers_count}</Text>
            </Text>
  
            <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
              Following: <Text style={{color:'white'}}>{item.public_metrics.following_count}</Text>
            </Text>
  
            <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
              Location: <Text style={{color:'white'}}>{item.location}</Text>
            </Text>

            <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
              Description: <Text style={{color:'white'}}>{item.description}</Text>
            </Text>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Ionicons name="calendar-outline" size={24} color="gray" style={{marginLeft:10,marginTop:15,marginRight:5}} />
              <Text  style={{color:'#808080',marginTop:15}}>
                Date created: <Text style={{color:'white'}}>{item.created_at}</Text>
              </Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Feather name="link" size={22} color="gray" style={{marginLeft:10,marginTop:15,marginRight:5}} />
              <Text style={{color:'#808080',marginTop:15}}>
                Link <Text style={{color:'dodgerblue'}} onPress={()=>WebBrowser.openBrowserAsync(item.url)} >
                  {item.url} 
                  </Text>
              </Text>
            </View>

        </View>
        <View style={{height:50}} />
        </>
        ))}
      
      </ScrollView>
      <FloatingAction
      color={twitterdarkcolor}
      actions={actions}
      onPressItem={name => {
        Alert.alert(`selected button: ${name}`);
      }}
      distanceToEdge={25}
      buttonSize={60}
      />
      </>
    )

}
return (
      <Profile users={users}/>
  );
}

const styles = StyleSheet.create({ 
  cardView: {
      flex:1,
      backgroundColor: twitterdarkcolor,
      alignItems:'center',
      justifyContent:'center'
  },
  title: {
      marginHorizontal: WindowWidth * 0.05,
      marginVertical: WindowWidth * 0.03,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'

  },
  description: {
    marginBottom:10, 
    color: 'gray',
    fontSize: 15
  },
  image: {
      width :'40%',
      aspectRatio:40/40,
      borderRadius: 80,
      marginTop: 15
  }

});
export default GetAPIs