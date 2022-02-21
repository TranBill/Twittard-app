import React from "react";
import { View, Text, Image} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {WindowWidth,WindowHeight} from "../utils/Dimensions"

const Media = ({media}) => {
  return (
        <>
        <View style={{justifyContent:'center'}} >
        <Image 
        key={media.media_key}
        source={{uri: media.url}}
        style={{
          height: WindowHeight / 1.5,
          marginLeft: WindowWidth * 0.02,
          marginRight: WindowWidth * 0.02,
          marginVertical: WindowHeight * 0.02,
          borderRadius:15
        }}
         
        />
        <Text style={{color:'white',fontSize:14}}> Type: {media.type}</Text>
        <Text 
        style={{color:'dodgerblue',fontSize:12}}
        onPress={()=>WebBrowser.openBrowserAsync(media.url)}
        >
            Media Link: {media.url} 
        </Text>
      </View>
      </>
        
        )
      };

export default Media;