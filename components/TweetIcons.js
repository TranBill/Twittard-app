import React, {useState} from "react";
import { View, Text,TouchableOpacity} from 'react-native';
import { Ionicons,EvilIcons,AntDesign } from '@expo/vector-icons';


const Tweeticons =({item})=>{
    const [Retweet, setRetweet] = useState(false);
        const RetweetButton =() => {
    setRetweet(!Retweet)
  }

    const [Like, setLike] = useState(false);
    const LikeButton = () => {
      setLike(!Like)
  }
    return(
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,marginBottom:10}}>
            <Ionicons name="md-chatbubble-outline" size={20} color="#C0C0C0" />
            <Text style={{color:'#c0c0c0',fontSize:10}}>{item.public_metrics.reply_count} </Text>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => RetweetButton()}>
                { Retweet ? 
                <>
                    <EvilIcons name="retweet" size={27} color="#00b378" />
                    <Text style={{color:'#00b378',fontSize:10,marginLeft:15}}>
                        {item.public_metrics.retweet_count + 1} 
                    </Text>
                </> 
                    :
                <>
                    <EvilIcons name="retweet" size={27} color="#c0c0c0" />
                    <Text style={{color:'#c0c0c0',fontSize:10,marginLeft:15}}>
                                {item.public_metrics.retweet_count}
                    </Text>
                </>
                }
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => LikeButton()}>
                { Like ? 
                <>
                    <AntDesign name="heart" size={23} color="#f91880" />
                    <Text style={{color:'#f91880',fontSize:10,marginLeft:15}}>
                      {item.public_metrics.like_count + 1} 
                    </Text>
                </> 
                    :
                <>
                    <AntDesign name="hearto" size={22} color="#c0c0c0" />
                    <Text style={{color:'#c0c0c0',fontSize:10,marginLeft:15}}>
                        {item.public_metrics.like_count} 
                    </Text>
                </>
              }
            </TouchableOpacity>
            <EvilIcons name="share-apple" size={30} color="#C0C0C0" />
        </View>
    )
}
export default Tweeticons;