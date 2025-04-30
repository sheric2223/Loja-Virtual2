import { StyleSheet } from "react-native";
import React from "react";

const estilosPrincipal = StyleSheet.create({

    container: {
        backgroundColor: '#131212',
        marginTop: -40,
    },

    menuProduto: {
        height: 100,
        display: 'flex',
        flexDirection: 'row',
    },

    btn: {
        width: 110,
        justifyContent: 'center',
    },

    txt: {
        marginTop: '40%',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 2,
        color: '#fff',
    },

    produtos: {
        backgroundColor: '#fff',
        height: 450,
        margin: 50,
        maxHeight: 450,
    },

    produtosTxtt: {
        fontSize: 25,
        marginTop: -48,
        paddingLeft: 15,
        width: '100%',
        height: 65,
        maxHeight: 65,
        minHeight: 65,
    },

    produtosTxxt: {
        fontSize: 30,
        marginBottom: -35,
        paddingLeft: 15,
        width: '100%',
        maxHeight: 90,
        minHeight: 90,
    },

    meusProdutos: {
        backgroundColor: '#105d87',
    },
});

export default estilosPrincipal;