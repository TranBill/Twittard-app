import React from 'react'

import { TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons,FontAwesome5,AntDesign,MaterialCommunityIcons,Feather  } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profilescreen from '../screens/Profilescreen';
import CustomDrawer from '../components/CustomDrawer';
import Listscreen from '../screens/Listscreen';
import Themescreen from '../screens/Themescreen';
import Tradescreen from '../screens/Tradescreen';
import Momentscreen from '../screens/Momentscreen';
import Moneyscreen from '../screens/Moneyscreen';
import Bookmarkscreen from '../screens/Bookmarkscreen';
import Homescreen from '../screens/Homescreen';
import GetUser from '../URls/GetUser';
import { twitterdarkcolor,twittercolor } from '../utils/contansts';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const [user, setUser] = React.useState();
    React.useEffect(() => {
    GetUser({}).then((response) => { 
      setUser(response.data)
    })
    ;
  }, []);

  if (!user) return null;

    return (
        <Stack.Navigator >
            <Stack.Screen
            name = 'Home'
            component={Homescreen}
            options={({navigation})=>({
                headerStyle:{
                    backgroundColor:twittercolor,

                },
                headerTitle: () => <Ionicons name='ios-logo-twitter' size={35} color={twitterdarkcolor}/>,
                headerLeft: () => 
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                headerRight: () => <MaterialCommunityIcons name="star-four-points-outline" size={30} color="white" />
            })}
            />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () =>{
    return( 
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            drawerLabelStyle:{marginLeft:-20},
            drawerActiveBackgroundColor:twittercolor,
            drawerActiveTintColor:'white',
            drawerInactiveTintColor:'white',
        }}
        >
            <Drawer.Screen 
            name = 'Nhà'
            component={HomeStack}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Ionicons name="home" size={24} color={color} /> 
                ),
                headerShown:false,
            }}
            />
            <Drawer.Screen 
            name = 'Hồ sơ'
            component={Profilescreen}
            options= {({navigation})=>({
                drawerIcon: ({color}) => ( 
                    <Ionicons name="ios-person-outline" size={24} color={color} /> 
                    ),
                    headerShown:false
                })}
                
                />
            <Drawer.Screen 
            name = 'Danh sách'
            component={Listscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <FontAwesome5 name="list-alt" size={24} color={color} />
                    ),
                
            }}
            />
            <Drawer.Screen 
            name = 'Chủ đề'
            component={Themescreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Ionicons name="ios-chatbubble-ellipses-outline" size={24} color={color} />
                    ),
                    
                }}
                />
            <Drawer.Screen 
            name = 'Dấu trang'
            component={Bookmarkscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Ionicons name="bookmark-outline" size={24} color={color} />
                    ),
                    
                }}
                />
            <Drawer.Screen 
            name = 'Khoảng khắc'
            component={Momentscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Ionicons name="flash-outline" size={24} color={color} />
                    ),
                    
                }}
                />
            <Drawer.Screen 
            name = 'Giao dịch mua'
            component={Tradescreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <AntDesign name="shoppingcart" size={24} color={color} />
                    ),
                    
                }}
                />
            <Drawer.Screen 
            name = 'Kiếm tiền'
            component={Moneyscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Ionicons name="cash-outline" size={24} color={color} />
                    ),
                    
                }}
                />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator