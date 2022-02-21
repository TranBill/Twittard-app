import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { twittercolor, twitterdarkcolor } from '../utils/contansts';

const LoginScreen=({navigation}) => {
    return (
      <View style={styles.container1}>
        <View style={{flex:1,marginTop:12}}>
          <View style={{flexDirection:'column'}}>

            <Text style ={styles.textStyle}>
            Xem điều gì  
            </Text>
            <Text style={styles.textStyle}>
            đang diễn ra
            </Text>
            <Text style={styles.textStyle}>
            trên thế giới
            </Text>
            <Text style={styles.textStyle}> 
            ngay bây giờ.
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonstyle} onPress={()=>WebBrowser.openBrowserAsync("https://www.google.com/account")}>
              <AntDesign name="google" size={25} color="red" style={{marginTop:2,marginRight:10,marginBottom:2}}/>
              <Text style={styles.buttonText}> Tiếp tục với Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle} onPress={()=>WebBrowser.openBrowserAsync("https://appleid.apple.com/")}>  
              <AntDesign name="apple1" size={25} color="black" style={{marginTop:2,marginRight:10,marginBottom:4}}/>
              <Text style={styles.buttonText}> Tiếp tục với Apple </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',marginTop:10}}>
          <Text style={{textDecorationLine:'line-through',color:'white',fontSize:10}}>----------------</Text>
          <Text style={{color:'white',fontSize:12}}> Hoặc </Text>
          <Text style={{textDecorationLine:'line-through',color:'white',fontSize:10}}>----------------</Text>
          </View>

          <View>
            <TouchableOpacity style={{
              backgroundColor: twitterdarkcolor,
              borderRadius: 35,
              paddingHorizontal: 20,
              paddingVertical: 12,
              marginTop: 15,
              alignItems:'center'
              }}
              onPress={()=>navigation.navigate('Tab')}
            >
              <Text style={{color:'white',fontSize:12,fontWeight:'900'}}> Tạo tài khoản </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'column',marginTop:10,alignContent:'space-between'}}>
          <Text style={{color:'gray',fontSize:11}}> Bằng cách đăng ký, bạn động ý với {'\n'}
            <Text style={{color:twitterdarkcolor,fontSize:11}}> Điều khoản, Chính sách riêng tư</Text>
            <Text style={{color:'gray',fontSize:11}}> và{'\n'}</Text>
            <Text style={{color:twitterdarkcolor,fontSize:11}}> Sử dụng cookie </Text>
            <Text style={{color:'gray',fontSize:11}}>của chúng tôi. </Text>
          </Text>
          </View>

          <View style={{marginTop:5}}>
            <Text style={{color:'gray',fontSize:14}}>
               Bạn đã có một tài khoản ?{'\n'}
              <Text  
              style={{color:twitterdarkcolor,fontSize:14}}
              onPress={() => navigation.navigate('Tab') }
              >
                Đăng nhập</Text>
            </Text>
          </View>
        
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: twittercolor
      },
      container2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "90%"
      },
      buttonstyle:{
        backgroundColor: 'white',
        borderRadius: 35,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,
        alignContent:'space-around',
        flexDirection:'row',
      },
      textStyle:{
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        fontFamily: 'Arial-BoldMT',
        fontWeight:'900',
        textAlignVertical:'top'
      },
      input:{
        width: '90%',
        backgroundColor: twittercolor,
        padding: 15,
        marginTop: 10,
        color:twitterdarkcolor,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5
      },
      buttonText:{
        fontSize: 12,
        textAlign: 'center',
        color:'black',
        fontWeight:'800',
      }
}
)

export default LoginScreen