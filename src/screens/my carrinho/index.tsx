import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

const MyCarrinho = () => {
  const navegation = useNavigation<propsStack>()
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              style={{ width: 150, height: 150, marginTop: 0, }}
              source={require('./ppp.jpeg')} />
          </View>
          <View style={styles.headerTxt}>
            <Text style={styles.txt}>Carinho De Compras!</Text>
          </View>
        </View>

        <View style={styles.carrinhoArea}>
          <View style={styles.carrinhoTxt}>
            <Text style={styles.carrinhoTitle}>Meu Carrinho</Text>
          </View>

          <View style={styles.headerItem}>
            <Text style={styles.produto}>Produto</Text>
            <Text style={styles.quant}>Quantidade</Text>
            <Text style={styles.ttotal}>Total</Text>
          </View>
          <View style={styles.carrinhoItens}>
            <View style={styles.item}>
              <Image
                source={require('./baixados (1).jpg')}
                style={{ width: 100, height: 100, marginTop: 20, marginLeft: -80, }}
              />
              <View style={styles.resumoItem}>
                <Text>Modelo:Iphone11</Text>
                <Text>Cor:Branco</Text>
              </View>
            </View>
            <View style={styles.configItem}>
              <View style={styles.qtd}>
                <TouchableOpacity>
                  <Text style={styles.btnQtd}>-</Text>
                </TouchableOpacity>
                <View style={styles.qtdItem}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.btnnQtd}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.total}>
                <Text style={styles.pricee}>R$3.500</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./baixados (1).jpg')}
                style={{ width: 100, height: 100, marginTop: 20, marginLeft: -80, }}
              />
              <View style={styles.resumoItem}>
                <Text>Modelo:Iphone11</Text>
                <Text>Cor:Branco</Text>
              </View>
            </View>
            <View style={styles.configItem}>
              <View style={styles.qtd}>
                <TouchableOpacity>
                  <Text style={styles.btnQtd}>-</Text>
                </TouchableOpacity>
                <View style={styles.qtdItem}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.btnnQtd}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.total}>
                <Text style={styles.pricee}>R$3.500</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={require('./baixados (1).jpg')}
                style={{ width: 100, height: 100, marginTop: 20, marginLeft: -80, }}
              />
              <View style={styles.resumoItem}>
                <Text>Modelo:Iphone11</Text>
                <Text>Cor:Branco</Text>
              </View>
            </View>
            <View style={styles.configItem}>
              <View style={styles.qtd}>
                <TouchableOpacity>
                  <Text style={styles.btnQtd}>-</Text>
                </TouchableOpacity>
                <View style={styles.qtdItem}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.btnnQtd}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.total}>
                <Text style={styles.pricee}>R$3.500</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.resumoCompras}>
          <View style={styles.title}>
            <Text style={styles.title}>Resumo De Compras</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.subTotal}>Sub-total</Text><Text style={styles.subTotal}>R$ 3.870</Text>
          </View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navegation.navigate("Home")}>
            <Text style={styles.btnOne}>Adicionar itens ao carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegation.navigate("MyconfirmePagamento")}>
            <Text style={styles.btnTwo}>Ir para pagamento</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
};

export default MyCarrinho;
const styles = StyleSheet.create({
  container: {
    height: '100%',

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
    marginTop: 55,
    width: 255,
    marginLeft: 15,
    color: '#fff',
  },
  carrinhoArea: {
    backgroundColor: '#6495ed',
    width: '100%',
    height: 570,
    alignItems: 'center',
  },
  carrinhoTxt: {
    alignItems: 'center',
  },
  carrinhoTitle: {
    color: '#fff',
    fontSize: 42,

  },
  carrinhoItens: {
    marginTop: -70,
  },
  headerItem: {
    flexDirection: 'row',
  },
  item: {
    marginLeft: 80,
    marginTop: 70,
  },
  resumoItem: {
    marginLeft: -80,
  },
  configItem: {
    marginTop: -120,
  },
  preco: {

  },

  pricee: {
    marginLeft: 250,
  },
  qtd: {
    flexDirection: 'row',
    marginTop: 20,
  },

  btnQtd: {
    backgroundColor: '#ccc',
    width: 20,
    textAlign: 'center',
    marginLeft: 140,
  },
  btnnQtd: {
    backgroundColor: '#ccc',
    width: 20,
    textAlign: 'center',
  },
  qtdItem: {
    width: 20,
    textAlign: 'center',
    marginLeft: 10,
  },


  total: {
    marginTop: -20,
  },
  resumoCompras: {
    backgroundColor: '#fff',
    height: 200,
  },

  title: {
    fontSize: 40,
    alignItems: 'center',
    color: '#1344ad',
  },

  subTotal: {
    fontSize: 40,
    alignItems: 'center',
  },
  frete: {
    fontSize: 40,
    alignItems: 'center',
  },
  totalFinal: {
    fontSize: 40,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
  },

  produto: {
    fontSize: 20,
    marginRight: 40,
    marginLeft: 5,
  },
  precoo: {
    fontSize: 20,
    marginRight: 40,
  },
  quant: {
    fontSize: 20,
    marginRight: 40,
  },
  ttotal: {
    fontSize: 20,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 100
  },

  btnOne: {
    backgroundColor: '#0932a2',
    width: 150,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    flexDirection: 'column',
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
  },
  btnTwo: {
    backgroundColor: '#1669b7',
    width: 150,
    height: 35,
    textAlign: 'center',
    marginBottom: 30,
    marginLeft: 20,
    color: '#fff',
    textAlignVertical: 'center',
  },
});




