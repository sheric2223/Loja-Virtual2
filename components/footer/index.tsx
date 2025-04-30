import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Button,Image,Dimensions,TextInput,ScrollView,Pressable, TouchableOpacity } from 'react-native';


export function Footer(){
return(
<View style={styles.footer}>
<View>
  <Text style={styles.footerTxt}>Email:Lojatec@hotmail.com</Text>
  <Text style={styles.footerTxt}>Tel:035 8523-8967</Text>
</View>
<View>
  <Text style={styles.footerTxt}>Formas de Pagamento:</Text>
  <Text style={styles.footerTxt}>No cartão Mastercard, Visa, Elo,boleto bancário,Pix.</Text>
</View>
<View>
  <Text style={styles.footerTxt}>CNPJ:</Text>
  <Text style={styles.footerTxt}>67.397.222/0001-60</Text>
</View>
</View>
)
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'#0c0c0c',
        height:120,
      },

      footerTxt:{
        color:'#b50e0e88',
      }
    });
