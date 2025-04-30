import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'




export function CabecalhoCadastro() {
    return (
<View style={styles.header}>
  <View>
    <Image
      style={{ width: 150, height: 150, marginTop: 0, }}
      source={require('./ppp.jpeg')} />
  </View>
  <View style={styles.headerTxt}>
    <Text style={styles.txt}>Caipira Shop Vendas Online
      Os itens de informatica vc encontra aqui!</Text>
  </View>
</View>
    )};

    


const styles = StyleSheet.create({
  container: {
    height: 970,
  },
  header: {
    backgroundColor: '#4169e1',
    color: '#fff',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
  },
  headerTxt: {
    backgroundColor: '#4169e1',
    width: '100%',
  },
  txt: {
    fontSize: 25,
    marginTop: 15,
    width: 255,
    marginLeft: 15,
    color: '#fff',
  },

});





