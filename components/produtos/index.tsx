import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { propsStack } from '.../../../src/routes/Stack/Models';
import TelaProduto from '../../src/screens/tela produto';

export function Produto() {
    const navegation = useNavigation<propsStack>()
    return (
<View style={styles.meusProdutos}>
          <View style={styles.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("Tela Produto")}>
              <Text style={styles.produtosTxxt}></Text>
              <Image
                source={require('./')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={styles.produtosTxtt}></Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({

menuProduto: {
  height: 100,
  display: 'flex',
  flexDirection: 'row',
},


produtos: {
  backgroundColor: '#fff',
  height: 450,
  margin: 50,
  maxHeight: 450,
},

produtosTxtt: {
  fontSize: 25,
  marginTop: -48,
  paddingLeft: 15,
  width: '100%',
  height: 65,
  maxHeight: 65,
  minHeight: 65,
},

produtosTxxt: {
  fontSize: 30,
  marginBottom: -35,
  paddingLeft: 15,
  width: '100%',
  maxHeight: 90,
  minHeight: 90,
},

meusProdutos: {
  backgroundColor: '#105d87',
},
});

