import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { propsStack } from '../../routes/Stack/Models';
import estilosPrincipal from '../../../assets/estilização  telas principais';
import { Cabecalho } from '../../../components/Cabecalho';
import { MenuNavegacao } from '../../../components/menu navegação categoria';
import { Footer } from '../../../components/footer';
import { Produto } from '../../../components/produtos';

const Home = () => {
  const navegation = useNavigation<propsStack>()
  return (
    <ScrollView>
      <SafeAreaView style={estilosPrincipal.container}>

        <Cabecalho />

        <MenuNavegacao />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Produto />

        <Footer />
      </SafeAreaView>

    </ScrollView>
  );
};

export default Home;
