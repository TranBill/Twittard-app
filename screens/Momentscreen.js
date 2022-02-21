import { View, StyleSheet,Button } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import { twittercolor } from '../utils/contansts';

function Momentscreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../assets/Video.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          style={{color:white}}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: twittercolor
    },
    video:{
      height: 450,
      width: 450
    },
    buttons:{
      marginTop: 15,
      borderRadius:20,
      backgroundColor: twittercolor,
      color:'white'
    }
})

export default Momentscreen