import * as React from 'react';
import { StyleSheet, ScrollView ,FlatList  ,Text, View,TouchableOpacity,TextInput,Image,Picker, ImageBackground} from 'react-native';

import { useNavigation ,useRoute} from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function Tutorial() {
const [Heading, setHeading] = useState("View")
const [description, setdescription] = useState("ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.")
const [example, setexample] = useState("ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.")
const [scrnshot, setscrnshot] = useState("View")

const route=useRoute();


    return(
        <View style={styles.container}>
            <Text style={styles.header} >{route.params.heading}</Text>

            <Text style={styles.txt1} >{description}</Text>
            <Text style={styles.header} >Example</Text>
            <Text style={styles.txt1} >{example}</Text>
            <Text style={styles.header} >Output</Text>
            
            <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
            
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    
    justifyContent: 'flex-start',
  },
  logo: {
    width: 350,
    height: 350,
    margin:10,

  },
  item:{
height:70,
borderBottomWidth:1,
borderColor:'#9CDCFE',
justifyContent:'center'
  },
  header:{
    color:"#000",
    fontSize:25,
    marginBottom:20,
    borderWidth:1,
    borderRadius:12,
    borderColor:"#9CDCFE",
    padding:2,  
    textAlign:'center',
  },
  lbl:{
    color:"#fff",
    fontSize:18,
    flexDirection:"row",

  },
  txt1: {
    
    
   marginHorizontal:10,
    fontSize:18,
     color:"#000",
      borderColor: 'gray',
      flexDirection:"row",
      
       textAlign:'left',
       borderRadius:10,
       padding:5,
       marginBottom:5,
     
  },
  btn: {
    margin:5,
  },
  roww:{
    flex:0.5,
     flexDirection:"row"
    },
    bor:{
      borderWidth:1,
      borderRadius:15,
      padding:10,
      backgroundColor:"#2196F3",
      borderColor:"#2196F3",
      marginTop:8,
      marginHorizontal:5,
      shadowColor: "red",

      
    }
    
});

