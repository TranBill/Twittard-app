import React from "react";
import { View, Text} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Feather,EvilIcons,FontAwesome5 } from '@expo/vector-icons';
import GetTweet from "../URls/GetTweet";

function UserInfo() {
  const [info, setInfo] = React.useState();
  React.useEffect(() => {
    GetTweet({}).then((response) => { 
      setInfo(response.data)
      console.log(response.data)
    })
    ;
  }, []);

  if (!info) return null;

  const User = ({info})=>{
      return(
        <View>
        {info.includes.users.map((item,index)=>(
        <View>
          <Text key={item.name} style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 12,color:'white' }}>
            {item.name} 
          </Text>

          <Text key={item.username} style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 12,color:'gray'}}>
            @{item.username}
          </Text>
          <Text key={index} style={{fontSize:12,fontWeight:'600',color:'white',marginLeft:10,marginTop:15}}>
              {item.description}
          </Text>
            <View key={index} style={{flexDirection:'row',margin:8}}>
                <Feather name="link" size={22} color="gray" style={{marginLeft:10}} />
                <Text style={{color:'dodgerblue',marginLeft:5,fontSize:12}} onPress={()=>WebBrowser.openBrowserAsync(item.url)} >
                    {item.url}
                </Text>
            </View>

            <View key={index} style={{flexDirection:'row',margin:8}}>
                <EvilIcons name="location" size={30} color="gray" style={{marginLeft:10}} />
                <Text style={{color:'gray',marginLeft:5,fontSize:12}} >
                    {item.location}
                </Text>
            </View>

            <View key={index} style={{flexDirection:'row',margin:8}}>
                <FontAwesome5 name="calendar-alt" size={24} color="gray" style={{marginLeft:10}} />
                <Text style={{color:'gray',marginLeft:7,fontSize:12}} >
                    {item.created_at}
                </Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20,marginLeft:10}} >
                <Text style={{color:'white',fontSize:12,fontWeight:'bold'}}> 
                {item.public_metrics.following_count} <Text style={{color:'gray',fontSize:12}}> Following </Text> 
                </Text>
                <Text style={{color:'white',fontSize:12,fontWeight:'bold'}}> 
                {item.public_metrics.followers_count} <Text style={{color:'gray',fontSize:12}}> Followers </Text> </Text>
            </View>
        </View>
        ))}
        <View style={{height:70,borderBottomWidth:0.5,borderBottomColor:'gray'}}/>
      </View>
      );

    }
return (
      <User info={info}/>
  );
}
export default UserInfo;