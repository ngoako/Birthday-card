import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const img = require('./assets/you.jpg')
export default function App() {
  return (
    <View style={{
      width: 640, height: 400, position: 'absolute', margin: 'auto', left: 0,
      right: 0, top: 0, bottom: 0, WebkitPerspective: 1200, perspective: 1200, transition: '1s',width:'90%',
    }}>
      <ImageBackground source={img} style={{size:'cover',width:'100%',height:'100%'}}>
      <View style={{alignContent:'center',margin:'auto',/* marginLeft:'45%' */marginTop:'20%'}}>
      <marquee style={{color:'blue',fontSize:38,marginTop:'20%'}} behavior="slide" direction="down">Happy Birthday...</marquee>

        <View style={{color:'rgb(213, 243, 243)'/* ,marginLeft:'20%' */,marginTop:20,fontSize:22}}>

          <marquee style={{color:'rgb(9, 54, 179)',}} behavior="slide" direction="right">You are Kind  </marquee>
          <marquee style={{color:'rgb(9, 54, 179)',marginLeft:'-10%'}} behavior="slide" direction="right">wishing you great success</marquee>
          <marquee style={{color:'rgb(9, 54, 179)',marginLeft:'-20%'}} behavior="slide" direction="right">in everything you do! </marquee>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
