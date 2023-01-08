
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { Audio } from 'expo-av';
import {Picker} from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';

const buttonColor=['red','orange','violet', 'green', 'blue', 'chocolate','brown']
const soundOne=[
  require('./assets/22.mp3'),
  require('./assets/12.mp3'),
  require('./assets/13.mp3'),
]
export default function App() {
  const [selectedValue, setSelectedValue] = useState("a");
  const playIt= 0
  handlePlaySound2 = async () => {
    if(selectedValue === 'a'){
      const soundObj2= new Audio.Sound()
      try{
        let source2 = soundOne[0]
        await soundObj2.loadAsync(source2)
        await soundObj2
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj2.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }else if(selectedValue === 'b'){
      const soundObj23= new Audio.Sound()
      try{
        let source3 = soundOne[1]
        await soundObj23.loadAsync(source3)
        await soundObj23
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj23.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }else if(selectedValue === 'c'){
      const soundObj4= new Audio.Sound()
      try{
        let source4 = soundOne[2]
        await soundObj4.loadAsync(source4)
        await soundObj4
          .playAsync()
          .then(async playbackStatus => {
            setTimeout(() => {
              soundObj4.unloadAsync()
            }, playbackStatus.playableDurationMillis)
          })
          .catch(error =>{
            console.log(error)
          })
      }catch(error){
        console.log(error)
      }
    }
    else{
      console.log('it didnt work')
    }
  }
  return(
    <View style={styles.container}>

      <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            onPress={()=>this.handlePlaySound2()}
          >
            <Feather name="skip-back" size={32} color="#000"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={()=>this.handlePlaySound2()}
          >
              <Feather name="play" size={32} color="#000"/>             
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={()=>this.handlePlaySound2()}
          >
              <Feather name="pause" size={32} color="#000"/>             
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={()=>this.handlePlaySound2()}
          >
            <Feather name="skip-forward" size={32} color="#000"/>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>this.handlePlaySound2()} style=
          {styles.button2}>
          <Text>Play Sound</Text>
          </TouchableOpacity>
          <Picker
            style={styles.pickerStyle}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Song 1" value="a" />
            <Picker.Item label="Song 2" value="b" />
            <Picker.Item label="Song 3" value="c" />
          </Picker>     
          <TouchableOpacity onPress={()=>this.handlePlaySound2()} style=
          {styles.button3}>
          <Text>Save locally</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handlePlaySound2()} style=
          {styles.button3}>
          <Text>Load data</Text>
          </TouchableOpacity>   
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonContainer:{
    height:40,
    margin: 5,
  },
  button:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button3: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
    },
  button2: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
    },
  buttonText:{
    color: '#fff',
    fontSize: 18,
  },
  trackInfo: {
    padding: 40,
    backgroundColor: '#191A1A',
  },
  buffer: {
    color: '#fff'
  },
  trackInfoText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#fff'
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 16
  },
  control: {
    margin: 5
  },
image: {
    width: 200,
    height: 200,
    resizeMode: 'contain' 
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})