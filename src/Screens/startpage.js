import * as React from 'react';
import { StyleSheet, ScrollView ,FlatList  ,Text, View,TouchableOpacity,TextInput,Image,Picker, ImageBackground} from 'react-native';

import { useNavigation ,useRoute} from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function startpage() {
    
    const navigation = useNavigation();
    var dataSource=[
        { 
              sno:1,
            Heading:"View"
        }, {
          sno:2,
            Heading:"FlatList"
        },
        {
          sno:3,
          Heading:"Image picker"
      }, {
        sno:4,
          Heading:"Barcode/QR code Scanner"
      }
    ]
    function Item({Heading}){
        return(<View style={styles.item}>



          <TouchableOpacity  style={styles.Listitems} onPress={()=>navigation.navigate("Tutorial",{'heading':Heading})}>

          
          
            <Text style={styles.txt1}> {Heading} </Text>
           
            
           
          </TouchableOpacity>
          
          </View>
        );
      }
    return(
        <View style={styles.container}>
        <FlatList
        data={dataSource}
        renderItem={({item})=>(
        <Item Heading={item.Heading} />
        
        )}
        keyExtractor={(item)=>item.sno}
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
  item:{
height:70,
borderBottomWidth:1,
borderColor:'#9CDCFE',
justifyContent:'center'
  },
  header:{
    color:"#fff",
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
    
    
    width :300,
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

