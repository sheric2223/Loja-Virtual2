import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Button,Image,Dimensions,TextInput,ScrollView,Pressable, TouchableOpacity } from 'react-native';
import { propsStack } from '.../../../src/routes/Stack/Models';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export function MenuNavegacao(){   
const navegation = useNavigation<propsStack>()
return(
     <View style={styles.menuProduto}>      
      <TouchableOpacity onPress={() => navegation.navigate("MyCel")}>
      <View style={styles.btn}>
       <Text style={styles.txt}>Celulares</Text>
     </View>
     </TouchableOpacity>         
     <TouchableOpacity onPress={() => navegation.navigate("MyNootebok")}>
     <View style={styles.btn}>
       <Text style={styles.txt}>Notebook</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navegation.navigate("MyOutros")}>
     <View style={styles.btn}>
       <Text style={styles.txt}>Outros</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navegation.navigate("MyAcessorios")}>
     <View style={styles.btn}>
       <Text style={styles.txt}>Acessorios</Text>
     </View>          
     </TouchableOpacity>
     </View>
)
}

const styles = StyleSheet.create({
menuProduto: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'#44aeff'
  },

  btn: {
    width:110,      
    justifyContent:'center',
  },

  txt:{
    marginTop:'40%',
    fontWeight:'bold',
    fontSize:15,
    padding:2,       
    color:'#fff',
  },

  produtos:{
    backgroundColor:'#fff',
    height:450,
    margin:50,
    maxHeight:450,
  },

  produtosTxtt:{
    fontSize:25,
    marginTop:-48,
    paddingLeft:15,
    width:'100%',
    height:65,
    maxHeight:65,
    minHeight:65,
  },

  produtosTxxt:{
    fontSize:30,
    marginBottom:-35,
    paddingLeft:15,
    width:'100%',
    maxHeight:90,
    minHeight:90,
  },

  meusProdutos:{
    backgroundColor:'#105d87',
  },
});
