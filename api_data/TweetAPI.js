import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';
import {WindowWidth} from "../utils/Dimensions"
import Media from "./MediaAPI";
import {getMediaData} from "../components/TweetService";
import GetTweet from "../URls/GetTweet";
import { twittercolor } from "../utils/contansts";
import moment from "moment";
import Tweeticons from "../components/TweetIcons";

function TweetAPI() {

  const [tweet, setTweet] = React.useState(null);
  React.useEffect(() => {
    GetTweet({}).then((response) => { 
      setTweet(response.data)
      console.log(response.data)
    })
    ;
  }, []);

  if (!tweet) return null;


  const Tweet = ({tweet})=>{
      return(
          <View>
             {/* TWEET LIST */}

            {tweet.data.map((item)=>(
                <View key={item.id} style={styles.cardView}>
                   {tweet.includes.users.map((info)=>(
                    <View  style={{flexDirection:'row'}}>
                        <Image 
                        source={{uri : info.profile_image_url}} 
                        style={{ 
                            height: 55, 
                            width: 55,
                            marginBottom:10,
                            borderRadius:40, 
                            marginLeft: 10,
                            marginRight: 5
                        }} 
                        />
                        <View>
                        <Text  style={{color:'white',fontWeight:'bold',fontSize:12,marginLeft:5}}>
                            {info.name}
                        </Text>
                        <Text style={{color:'gray',fontWeight:'bold',fontSize:12,marginTop:5,marginLeft:5}}>
                          @{info.username}
                        </Text>
                        </View>
                        <Text style={{color:'gray',fontSize:12,left:60}}>
                        {moment(item.created_at).fromNow()
                        .replace("days ago",'d')
                        .replace("a day ago",'1d')
                        .replace("hours ago",'h')
                        .replace("a hour ago",'1h')
                        .replace("minutes ago", 'm')
                        .replace("a minute ago",'1m')
                        .replace("seconds ago",'s')
                        .replace("a second ago","1s")}
                        </Text>
                        
                    </View>
                   ))}

                    <Text key={item.text} style={{color:'white'}}>
                        {item.text}
                    </Text>

                    {
                      getMediaData(item.attachments, tweet.includes).map(item => {
              
                        return <Media media={item} />
                      })
                    }
                  
                  <Tweeticons item={item}/>

                </View>
            ))} 
          </View>
      );
  }
return (
      <Tweet tweet={tweet}/>
  );
}
export default TweetAPI;

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: twittercolor,
        margin: WindowWidth * 0.03,
        borderRadius: WindowWidth * 0.05,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    }
  }
)
