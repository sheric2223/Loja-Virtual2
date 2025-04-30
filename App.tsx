import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from "./src/screens/Home";
import MyCadastro from "./src/screens/my cadastro";
import MyCarrinho from "./src/screens/my carrinho";
import TelaProduto from "./src/screens/tela produto";
import MyOutros from "./src/screens/my outros";
import MyAcessorios from "./src/screens/acessorios";
import MyNootebok from "./src/screens/my nootebok";
import MyCel from "./src/screens/My Cel";
import LOGIN from "./src/screens/LOGIN";
import MyconfirmePagamento from "./src/screens/MyconfirmePagamento";

const Stack = createNativeStackNavigator();


export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MyCadastro" component={MyCadastro}/>
                <Stack.Screen name="MyCarrinho" component={MyCarrinho}/>
                <Stack.Screen name="TelaProduto" component={TelaProduto}/>
                <Stack.Screen name="MyOutros" component={MyOutros}/>
                <Stack.Screen name="MyAcessorios" component={MyAcessorios}/>
                <Stack.Screen name="MyNootebok" component={MyNootebok}/>
                <Stack.Screen name="MyCel" component={MyCel}/>
                <Stack.Screen name="LOGIN" component={LOGIN}/>
                <Stack.Screen name="MyconfirmePagamento" component={MyconfirmePagamento}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}