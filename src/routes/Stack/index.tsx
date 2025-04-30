import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TelaProduto from "../../screens/tela produto";
import Home from "../../screens/Home";
import LOGIN from "../../screens/LOGIN";
import MyOutros from "../../screens/my outros";
import MyCadastro from "../../screens/my cadastro";
import { propsNavigateStack } from "./Models";



const {Navigator,Screen} = createNativeStackNavigator<propsNavigateStack>();

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{ headerShown:false }}>
          <Screen name="Home" component={Home}/>
        </Navigator>
    )
}