import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { propsStack } from '../../routes/Stack/Models';
import estilosPrincipal from '../../../assets/estilização  telas principais';
import { Cabecalho } from '../../../components/Cabecalho';
import { MenuNavegacao } from '../../../components/menu navegação categoria';
import { Footer } from '../../../components/footer';


const MyCel = () => {
  const navegation = useNavigation<propsStack>()
  return (
    <ScrollView>
      <SafeAreaView style={estilosPrincipal.container}>
        <Cabecalho />
        <MenuNavegacao />
        <View style={estilosPrincipal.meusProdutos}>
          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/OIP (2).jpeg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/55501ddea2d0e5c21eb223c394594beb (1).webp')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/baixados (1).jpg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/R (2).jpeg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/R.png')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/baixados.jpg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/006ce994749dda4f1e1e9bf86f33b03f.webp')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/OIP (13).jpeg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>


          <View style={estilosPrincipal.produtos}>
            <TouchableOpacity onPress={() => navegation.navigate("TelaProduto")}>
              <Text style={estilosPrincipal.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>
              <Image
                source={require('./cel.img/baixados (4).jpeg')}
                style={{ width: 312, height: 380, }}
                resizeMode='center' />
              <Text style={estilosPrincipal.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    </ScrollView>
  );
};


export default MyCel;