import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from "./DrawerNavigator";
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function Authstack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
  
  
  export default Authstack