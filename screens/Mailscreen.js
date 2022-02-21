import React, { useRef } from "react";
import { View, Text, Keyboard } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { twittercolor, twitterdarkcolor } from "../utils/contansts";
import { FloatingAction } from "react-native-floating-action";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Mailscreen() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: twittercolor
      }}
    >
      <View style={{
        flex: 0.8,
        flexDirection:'column',
        alignItems: "flex-start",
        backgroundColor: twittercolor,
        margin: 20
      }}>
        <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>
          Gửi một tin nhắn, nhận một tin nhắn
        </Text>
        <Text style={{color:'gray',fontSize:12,marginTop:10,marginBottom:10}}>
          Tin nhắn trực tiếp là những cuộc trò truyện riêng tư giữa bạn và những người khác trên Twitter. Chia sẻ Tweet, phương tiện và hơn thế nữa!
        </Text>
      <TouchableOpacity 
      onPress={() => refRBSheet.current.open()} 
      style={{backgroundColor:twitterdarkcolor,borderRadius:35,padding:15,marginTop: 35}}
      >
        <Text style={{fontSize:12,fontWeight:'bold',color:'white'}}>Viết tin nhắn</Text>
      </TouchableOpacity>
      </View>
      <RBSheet
        animationType="slide"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: twittercolor
          },
        }}
        height= {700}
      >
        <View style={{flex: 1,backgroundColor:twittercolor}} >
          <View style={{flex:0.08,borderBottomColor:'gray',borderBottomWidth:1,justifyContent:'flex-start'}}>
          <Text 
            style={{color:'white',marginTop:5,marginLeft:5,fontWeight:'bold',fontSize:15}}
            onPress={()=>refRBSheet.current.close()}> Hủy 
           </Text>
          </View>
          <TextInput
          multiline
          editable
          placeholder="Write something..."
          placeholderTextColor={"gray"}
          color={"white"}
          style={{marginLeft:10}}
          onPressIn={()=> Keyboard.dismiss()}
          />
        </View>

      </RBSheet>

      <FloatingAction
        color={twitterdarkcolor}
        onPressMain={()=>refRBSheet.current.open()}
        floatingIcon={<MaterialCommunityIcons name="email-plus-outline" size={24} color="white" />}
        showBackground={false}
        distanceToEdge={25}
        buttonSize={60}
      />
    </View>
  );
}