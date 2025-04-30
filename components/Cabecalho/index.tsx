import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Button,Image,Dimensions,TextInput,ScrollView,Pressable, TouchableOpacity } from 'react-native';
import { propsStack } from '../../src/routes/Stack/Models';


export function Cabecalho(){   
  const navegation = useNavigation<propsStack>()
return(
<View style={styles.cabecalho}>
<View>
  <TextInput
    style={styles.barraDePesquisa}
    placeholder="Pesquisar"
    placeholderTextColor="#1f1d1d" />
</View>
<View>
  <TouchableOpacity onPress={() => navegation.navigate("MyCadastro")}>
  <Image
    style={{ width: 100, height: 90, marginTop:30, marginLeft:0,}}
    source={require('./cabecalho.img/baixados.jpeg')}/>
  <Text style={styles.myaconty}>Minha Conta</Text>
  </TouchableOpacity>
</View>
<View>

<TouchableOpacity onPress={() => navegation.navigate("MyCarrinho")}>
<Image
  style={{ width: 100, height: 90, marginTop:31, marginLeft:0, }}
  source={require('./cabecalho.img/OIP.jpeg')} />
<Text style={styles.mycarrinho}>Meu Carrinho</Text>
</TouchableOpacity>
</View>
</View>
)
}

const styles = StyleSheet.create({
    cabecalho: {
      backgroundColor: '#6328285f',
      display: 'flex',
      flexDirection: 'row',
    },

    barraDePesquisa: {
      marginTop:40,
      fontSize: 25,
      height: 100,
      width: 220,
      backgroundColor: '#eaeaea',
    },

    myaconty:{
      marginLeft:10,
      color:'#fdffff',
      backgroundColor:'#000',
    },

    mycarrinho:{
      marginLeft:5,
      color:'#fdffff',
      backgroundColor:'#000',
    },
  });

