import React from "react";
import { View, Text , StyleSheet, Image} from 'react-native';
import {WindowWidth} from "../utils/Dimensions"
import { twittercolor } from "../utils/contansts";
import GetUser from "../URls/GetUser";

function GetAPI() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    GetUser({}).then((response) => { 
      setUser(response.data)
      console.log(response.data)
    })
    ;
  }, []);

  if (!user) return null;

  const Profile = ({user})=>{

    return(
      <>
      <View style={styles.cardView}>
        <Image source={{uri : user.data.profile_image_url}} style={styles.image} />
        <Text style={styles.title}>
          {user.data.name}
        </Text>
        <Text style={styles.description}> 
          @{user.data.username}
        </Text>
      </View>

      <View style={{backgroundColor:twittercolor,flex:1,justifyContent:'center',alignContent:'center'}}>
          <Text style={{color:'#808080',marginLeft:30}}>
          Follower: <Text style={{color:'white'}}>{user.data.public_metrics.followers_count}</Text>
          </Text>

          <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
            Following: <Text style={{color:'white'}}>{user.data.public_metrics.following_count}</Text>
          </Text>

          <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
            Location: <Text style={{color:'white'}}>{user.data.location}</Text>
          </Text>

          <Text style={{color:'#808080',marginTop:15,marginLeft:30}}>
            id: <Text style={{color:'white'}}>{user.data.id}</Text>
          </Text>
      </View>
      </>
    )

}
return (
      <Profile user={user}/>
  );
}

const styles = StyleSheet.create({ 
  cardView: {
      flex:1,
      backgroundColor: twittercolor,
      alignItems:'center',
      justifyContent:'center'
  },
  title: {
      marginHorizontal: WindowWidth * 0.05,
      marginVertical: WindowWidth * 0.03,
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',

  },
  description: {
      marginTop: 10, 
      color: 'white',
      fontSize: 15
  },
  image: {
      width :'40%',
      aspectRatio:48/48,
      borderRadius: 80
  },
  author: {
      marginBottom: WindowWidth * 0.0,
      marginHorizontal: WindowWidth * 0.05,
      fontSize: 15,
      color: twittercolor

  }

});
export default GetAPI