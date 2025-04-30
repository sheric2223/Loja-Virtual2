import { useNavigation } from '@react-navigation/native';
import { propsStack } from '.../../../src/routes/Stack/Models';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

export function BtnLogin() { 
    const schema = yup.object({
        email: yup.string().email("Email Invalido").required("Informe Seu Email"),
        password:yup.string().min(8,"A senha deve ter no minimo 8 digitos").required("Informe Sua senha")
      })
      const navegation = useNavigation<propsStack>()
      const { control, handleSubmit, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
      })
    
      function handleSignIn() {
      }
    

    };
