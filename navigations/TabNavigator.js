//Libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome5,Feather } from '@expo/vector-icons';

//Screens
import DrawerNavigator from './DrawerNavigator';
import SearchStack from './SearchStack';
import NotificationStack from './NotificationStack';
import MailStack from './MailStack';
import { twittercolor, twitterdarkcolor } from '../utils/contansts';

const Tab = createBottomTabNavigator();

const TabNavigator =() =>{
    return (
        <Tab.Navigator
        screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor:twittercolor,
        tabBarInactiveBackgroundColor:twittercolor,
        tabBarInactiveTintColor:'white',
        tabBarActiveTintColor: twitterdarkcolor
        }}
        >
            <Tab.Screen name="Home2" component={DrawerNavigator} 
            options={()=> ({
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home-outline" size={size} color={color}  />
                    ),
                
            })}
            />

            <Tab.Screen name="Search" component={SearchStack} 
            options={()=> ({
                tabBarIcon:({color,size})=>(
                    <Ionicons name="search" size={size} color={color}  />
                    )
            })}
            />

            <Tab.Screen name="Notification" component={NotificationStack} 
            options={()=> ({
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="bell" size={size} color={color} />
                    )
            })}
            />

            <Tab.Screen name="Mail" component={MailStack} 
            options={()=> ({
                tabBarIcon:({color,size})=>(
                    <Feather name="mail" size={size} color={color} />
                    )
            })}
            />
        </Tab.Navigator>
    );

}


export default TabNavigator