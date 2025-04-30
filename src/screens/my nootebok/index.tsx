import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, Dimensions, TextInput, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

import estilosPrincipal from '../../../assets/estilização  telas principais';
import { Cabecalho } from '../../../components/Cabecalho';
import { MenuNavegacao } from '../../../components/menu navegação categoria';
import { Footer } from '../../../components/footer';
import { Produto } from '../../../components/produtos';

const MyNootebok = () => {
  const navegation = useNavigation<propsStack>()
  return (
    <ScrollView>
      <SafeAreaView style={estilosPrincipal.container}>
        <Cabecalho />

        <MenuNavegacao />
        <View style={estilosPrincipal.meusProdutos}>
          <Produto

          />


          <Produto />

          <Produto />


          <Produto />


          <Produto />


          <Produto />


          <Produto />


          <Produto />


          <Produto />

        </View>
        <Footer />
      </SafeAreaView>
    </ScrollView>
  );
};



export default MyNootebok;
