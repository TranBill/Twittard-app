import React from 'react';
import {View,Text,ScrollView,Image,Animated,Alert,RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TweetAPI from '../api_data/TweetAPI';
import UserInfo from '../components/UserInfo';
import GetTweet from '../URls/GetTweet';
import actions from '../utils/ActionButton';
import { FloatingAction } from 'react-native-floating-action';
import { twittercolor, twitterdarkcolor } from '../utils/contansts';

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 90;
PROFILE_IMAGE_MIN_HEIGHT = 50;

function Profilescreen() {

  const navigation = useNavigation();

  this.state = {
    scrollY: new Animated.Value(0)
  };
  //ANIMATION PROPS
  const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });
  const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

  const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: 'clamp'
    });
  const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp'
    });

  const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
      ],
      outputRange: [-46, -46, -46, 0],
      extrapolate: "clamp"
    });
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => setRefreshing(false));
  }, []);

  //API
  const [user, setUser] = React.useState();
    React.useEffect(() => {
      GetTweet({}).then((response) => { 
        setUser(response.data)
      })
      ;
    }, []);
  
  if (!user) return null;

    return (
      <View style={{ flex: 1,backgroundColor: twittercolor }}> 
      {/* PROFILE HEADER */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: twitterdarkcolor,
            height: headerHeight,
            zIndex: headerZindex,
            elevation: headerZindex, 
            alignItems: 'center',
            flex: 0.5,
          }}
        >
          <MaterialCommunityIcons 
          name="arrow-left-circle" 
          size={30} 
          color="black" 
          onPress={()=>navigation.openDrawer()}
          style={{
            marginLeft: 15,
            marginBottom: 20,
            marginTop: 20,
            alignSelf:'flex-start'
          }}
          />

          <Animated.View
              style={{ position: 'absolute', bottom: headerTitleBottom,alignContent:'center',overflow:'hidden' }}
            >
              {user.includes.users.map((item)=>(
              <>
                <Text key={item.name} style={{ color: 'white', fontSize: 12, fontWeight: 'bold',marginTop:5 }}>
                  {item.name}
                </Text>
                <Text key={item.public_metrics.tweet_count} style={{color:'white',fontSize:9,marginBottom:5,alignSelf:'center'}}>
                  {item.public_metrics.tweet_count} Tweet
                </Text>
              </>
              ))}

          </Animated.View>
        </Animated.View>
        
        {/* SCROLL VIEW */}
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ],
          {useNativeDriver:false}
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          >
            {/* PROFILE AVATAR SCROLL ANIMATION */}
          <TouchableOpacity onPress={()=>navigation.navigate('Nhà')}>
            <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: twittercolor,
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: profileImageMarginTop,
              marginLeft: 10,
              
            }}
            >
              {user.includes.users.map((item,index)=>(
                <Image
                key={index}
                source={{uri : item.profile_image_url}}
                style={{ flex: 1, width: null, height: null }}
              />
              ))}
            </Animated.View>
          </TouchableOpacity>
          
          <UserInfo/>
          <TweetAPI/>
  
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
      </View>
    );
}
export default Profilescreen;