import React from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';

import Notificationscreen from '../screens/Notificationscreen';
import axios from "axios";
import { USER_URL } from "../BASE_URL";
import { twittercolor } from '../utils/contansts';
const Stack = createNativeStackNavigator();

function NotificationStack()  {
    const [user, setUser] = React.useState();
    React.useEffect(() => {
    axios(USER_URL).then((response) => { 
      setUser(response.data)
      console.log(response.data)
    })
    ;
    }, []);

    if (!user) return null;

    return (
        <Stack.Navigator >
            <Stack.Screen
            name = 'Notification2'
            component={Notificationscreen}
            options={({navigation})=>({
                headerStyle:{
                    backgroundColor:twittercolor,

                },
                headerTitle: () => <Text style={{color: 'white',fontWeight:"bold"}} > Thông báo </Text>,
                headerLeft: () => 
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image 
                source={{uri : user.data.profile_image_url}} 
                style={{ 
                    height: 35, 
                    width: 35,
                    marginBottom:15,
                    borderRadius:40, 
                    marginLeft: 10,
                    marginTop: 5 
                }}
                />
                </TouchableOpacity>,
                headerRight: () => <EvilIcons name="gear" size={30} color="white" />
            })}
            />

        </Stack.Navigator>
    )
}
export default NotificationStack