import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { propsStack } from '../../routes/Stack/Models';
import estilosPrincipal from '../../../assets/estilização  telas principais';
import { Cabecalho } from '../../../components/Cabecalho';
import { MenuNavegacao } from '../../../components/menu navegação categoria';
import { Footer } from '../../../components/footer';
import { Produto } from '../../../components/produtos';
import { CabecalhoCadastro } from '../../../components/cabecalho Login';


const MyconfirmePagamento = () => {
  const navegation = useNavigation<propsStack>()
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <CabecalhoCadastro />
        </View>

        <View style={styles.myAdreess}>
          <View style={styles.enderecoDeEntrega}>
            <Text style={styles.enderecoDeEntrega}>Endereço: Rua Joaquin Ludovico De Souza</Text>
            <Text style={styles.enderecoDeEntrega}>Bairro: Jutipestre</Text>
            <Text style={styles.enderecoDeEntrega}>N*: 450</Text>
          </View>
        </View>

        <View style={styles.produto}>
          <View style={styles.myCompras}>
            <Image
              source={require('./006ce994749dda4f1e1e9bf86f33b03f.webp')}
              style={{
                width: 100, height: 100, marginTop: 20
              }}
            />
            <View style={styles.myComprasTxt}>
              <Text>Nome Do Produto:Samsung A35 5G </Text>
              <Text>Cor:Branco</Text>
            </View>

            <View style={styles.btnQtd}>
              <Button
                title='+'
              />

              <Text>1</Text>

              <Button
                title='-'
              />
            </View>

          </View>

        </View>

        <View style={styles.metodoPag}>
          <View>
            <Text>Método de Pagamento</Text>
          </View>
          <View style={styles.metodoPix}>
            <Text style={styles.pix}>Pix</Text>
          </View>

          <View style={styles.metodoBoleto}>
            <Text style={styles.boleto}>Boleto Bancario</Text>
          </View>

          <View style={styles.metodoCartao}>
            <Text style={styles.card}>Cartão De Credito</Text>
          </View>

          <View style={styles.metodoCard}>
            <Text style={styles.cardDeb}>Cartão De Debito</Text>
          </View>

          <View style={styles.metodoPayPal}>
            <Text style={styles.paypal}>PayPal</Text>
          </View>
        </View>


        <View style={styles.fretTotalArea}>
          <Text>Valor Total</Text>

          <Text>SubTotal</Text>

          <Text></Text>

          <Text></Text>

          <Text></Text>

          <Text></Text>

        </View>






      </SafeAreaView>
    </ScrollView>
  );
};


export default MyconfirmePagamento;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21217e',
    width: '100%',
  },
  myAdreess: {
    backgroundColor: '#740e12',
    height: 120,
    width: '100%',
  },
  enderecoDeEntrega: {
    fontSize: 20,
    backgroundColor: '#fff',
    height: 40,
  },
  produto: {
    backgroundColor: '#ffcccd',
    height: 200,
    width: '100%',

  },
  btnQtd: {
    marginLeft: 0,
  },
  myCompras: {
    flexDirection: 'row',
  },
  myComprasTxt: {
    margin: 20,
  },
  metodoPag: {
    backgroundColor: '#063576',
    height: 200,
    width: '100%',
  },
  fretTotalArea: {
    backgroundColor: '#1ea3b8',
    height: 200,
    width: '100%',
  },
  pix: {
    fontSize: 20,
  },
  boleto: {
    fontSize: 20,
  },
  card: {
    fontSize: 20,
  },
  cardDeb: {
    fontSize: 20,
  },
  paypal:{
    fontSize: 20,

  }
});