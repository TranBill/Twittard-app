import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/Loginscreen';

import { Ionicons } from '@expo/vector-icons';
import DrawerNavigator from "./navigations/DrawerNavigator";
import TabNavigator from './navigations/TabNavigator';
import { twittercolor, twitterdarkcolor } from './utils/contansts';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name = 'Login'
            component={LoginScreen}
            options={{
              headerStyle:{
                backgroundColor:twittercolor,

            },
              headerTitle: () => <Ionicons name='ios-logo-twitter' size={35} color={twitterdarkcolor}/>,
          }}
          />
          <Stack.Screen
             options={{headerShown:false}}
             name = 'Drawer'
             component={DrawerNavigator}
           />
            <Stack.Screen
              options={{headerShown:false}}
              name = 'Tab'
              component={TabNavigator}
            />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App