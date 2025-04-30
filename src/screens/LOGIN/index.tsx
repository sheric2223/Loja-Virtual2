import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'
import { propsStack } from '../../routes/Stack/Models';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CabecalhoCadastro } from "../../../components/cabecalho Login";
import { BtnLogin } from "../../../components/btn login";

const LOGIN = () => {  
  const navegation = useNavigation<propsStack>()
  const schema = yup.object({
    email: yup.string().email("Email Invalido").required("Informe Seu Email"),
    password: yup.string().min(8, "A senha deve ter no minimo 8 digitos").required("Informe Sua senha")
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data.email)
  }

  return (
    <SafeAreaView style={styles.container}>
      <CabecalhoCadastro />

      <View style={styles.bodyContend}>
        <View style={styles.bodyTitle}>
          <Text style={styles.bodyTxt}>Área De Login</Text>
        </View>
        <View style={styles.cadastro}>
          <Text style={styles.cadasTxt}>Faça Seu Login</Text>
        </View>
        <View style={styles.formArea}>
          <View style={styles.form}>


            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                  placeholder='Digite seu Email'
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                  placeholder='Digite Sua Senha'
                  secureTextEntry={true}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

          </View>
          <View style={styles.contendBtn}>
            <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
              <Text style={styles.btnOne}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navegation.navigate("MyCadastro")}>
              <Text style={styles.btnTwo}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default LOGIN;


const styles = StyleSheet.create({
  container: {
    height: 833,
    backgroundColor: '#87cefa'
  },

  bodyContend: {
    height: 820,
    width: 450,
    justifyContent: 'center',
    backgroundColor: '#87cefa',

  },

  bodyTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  bodyTxt: {
    fontSize: 44,
    marginLeft: -37,
  },
  cadastro: {
    display: 'flex',
    alignItems: 'center',
  },
  cadasTxt: {
    fontSize: 22,
    marginLeft: -37,
  },
  formArea: {
    height: 550,
    marginLeft: -50,
    alignItems: 'center',
  },
  form: {

  },
  contendBtn: {
    flexDirection: 'row',
  },

  btnOne: {
    backgroundColor: '#0932a2',
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 20,
    color: '#fff',
    textAlignVertical: 'center',
  },
  btnTwo: {
    backgroundColor: '#1669b7',
    width: 100,
    height: 35,
    textAlign: 'center',
    margin: 20,
    color: '#fff',
    textAlignVertical: 'center',
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff0000',
    marginLeft: 10,
  }
});




