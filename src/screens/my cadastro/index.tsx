import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form'
import { CabecalhoCadastro } from "../../../components/cabecalho Login";
import { BtnLogin } from "../../../components/btn login";


const MyCadastro = () => {
  const navegation = useNavigation<propsStack>()
  const schema = yup.object({
    email: yup.string().email("Email Invalido").required("Informe Seu Email"),
    password: yup.string().min(8, "A senha deve ter no minimo 8 digitos").required("Informe Sua senha"),
    username: yup.string().min(2, "Seu nome deve ter no minimo 2 digitos").required("Informe seu nome"),
    lastName: yup.string().min(2, "Seu sobrenome deve ter no minimo 2 digitos").required("Informe seu nome"),
    cpf: yup.string().matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, 'Formato de CPF inválido').required("Digite seu cpf"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),], 'Senhas não correspondem').required('Confirmação de senha é obrigatória'),
    confirmEmail: yup.string().oneOf([yup.ref('email'),], 'Emails não correspondem').required('Confirmação de email é obrigatória'),
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data.email)
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <CabecalhoCadastro />

        <View style={styles.bodyContend}>
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyTxt}>Área De Cadastro</Text>
          </View>
          <View style={styles.cadastro}>
            <Text style={styles.cadasTxt}>Faça Seu Cadastro</Text>
          </View>
          <View style={styles.formArea}>
            <View>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                    placeholder='Digite seu Nome'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                    placeholder='Digite seu Sobrenome'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.lastName && <Text style={styles.labelError}>{errors.lastName?.message}</Text>}

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
                name="confirmEmail"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                    placeholder='Confirme seu Email '
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.confirmEmail && <Text style={styles.labelError}>{errors.confirmEmail?.message}</Text>}


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

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                    placeholder='Confirme Sua Senha'
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.confirmPassword && <Text style={styles.labelError}>{errors.confirmPassword?.message}</Text>}



              <Controller
                control={control}
                name="cpf"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ backgroundColor: '#999', width: 300, margin: 10, height: 55, }}
                    placeholder='Digite Seu CPF'
                    keyboardType="numeric"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message}</Text>}

            </View>
            <View style={styles.contendBtn}>
              <TouchableOpacity onPress={() => navegation.navigate("LOGIN")}>
                <Text style={styles.btnOne}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
                <Text style={styles.btnTwo}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
};

export default MyCadastro;


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#87cefa'
  },

  bodyContend: {
    height: '100%',
    width: 450,
    backgroundColor: '#87cefa'
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
    height: '100%',
    marginLeft: -50,
    alignItems: 'center',
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
  }, labelError: {
    alignSelf: 'flex-start',
    color: '#ff0000',
    marginLeft: 10,
  },
});




