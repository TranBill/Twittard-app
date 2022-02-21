import React from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import {DrawerItemList,DrawerContentScrollView} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser';

import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import GetUser from '../URls/GetUser';
import { twittercolor } from '../utils/contansts';



function CustomDrawer(props) {
    const navigation = useNavigation();
    const [user, setUser] = React.useState();
    React.useEffect(() => {
    GetUser({}).then((response) => { 
      setUser(response.data)
    })
    ;
  }, []);

  if (!user) return null;
    return(
    <>
        <View style={{ flex: 0.75,backgroundColor:twittercolor,borderBottomColor:'gray',borderBottomWidth:1,width:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-around'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login') }> 
            <Image 
            source={{uri : user.data.profile_image_url}} 
            style={{ 
                height: 55, 
                width: 55,
                marginBottom:10,
                borderRadius:40, 
                marginLeft: 20,
                marginTop: 25 
            }} 
            />
            </TouchableOpacity>
            <MaterialCommunityIcons 
            name="account-box-multiple-outline" 
            size={26} 
            color='white'
            style={{
                marginRight: 10,
                alignSelf:'center'

            }}
            />
            </View> 
            <Text style={{color:'white',fontSize:15,marginLeft:15,fontWeight:'bold'}}>
                {user.data.name}
            </Text>
            <View>
                <Text style={{color:'#808080',fontSize:12,marginLeft:15,marginBottom:20}}>
                    @{user.data.username}
                </Text>
                <View style={{flexDirection:'row',marginLeft:15}}>
                    <Text style={{color:'white',fontSize:10}}> {user.data.public_metrics.following_count}</Text>
                    <Text style={{color:'#808080',fontSize:10}}> Following</Text>
                    <Text style={{color:'white',fontSize:10}}> {user.data.public_metrics.followers_count}</Text>
                    <Text style={{color:'#808080',fontSize:10}}> Followers</Text>
                </View>
            </View>
        </View>

        <DrawerContentScrollView {...props} style={{backgroundColor:twittercolor}}>
            <View style={{flex:1,backgroundColor:twittercolor,paddingTop:15}}>
                <DrawerItemList {...props}/>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:10,marginBottom:20,
                borderColor:'gray',
                borderWidth:0.5,
                paddingVertical:20
                }}>
                <Ionicons name="rocket-outline" size={24} color="white" style={{marginLeft:20}} />
                <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync("https://twitter.com/home")}>
                <Text style={{fontSize:14,color:'white',marginLeft:10,fontWeight:'500'}}>Real Twitter</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
        
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20,
            paddingVertical:-20,
            borderTopWidth:0.5,
            borderTopColor:'gray',
            backgroundColor:twittercolor}}>
        <TouchableOpacity 
        onPress={()=>{}} 
        style={{paddingVertical:11.5}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="bulb-outline" size={24} color='white' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> {}}
        style={{paddingVertical:6.5}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="md-qr-code-outline" size={24} color="white" style={{marginTop:5}} />
            </View>
        </TouchableOpacity>
       </View>
    </>
    )
}

export default CustomDrawer