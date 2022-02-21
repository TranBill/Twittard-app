import React from 'react';
import { TouchableOpacity,Image } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,EvilIcons  } from '@expo/vector-icons';
import { twittercolor, twitterdarkcolor } from '../utils/contansts';

import Searchscreen from '../screens/Searchscreen';
import axios from "axios";
import { USER_URL } from "../BASE_URL";

const Stack = createNativeStackNavigator();

function SearchStack()  {
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
            name = 'Search2'
            component={Searchscreen}
            options={({navigation})=>({
                headerStyle:{
                    backgroundColor:twittercolor,

                },
                headerTitle: () => <Ionicons name='ios-logo-twitter' size={35} color={twitterdarkcolor}/>,
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
                headerRight: () =>  <EvilIcons name="gear" size={30} color="white" />
            })}
            />

        </Stack.Navigator>
    )
}
export default SearchStack