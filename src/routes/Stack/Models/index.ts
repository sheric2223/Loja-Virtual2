import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type propsNavigateStack = {
    Home:undefined
    MyCadastro: {
        name: string
    }
     MyLogin:undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigateStack>