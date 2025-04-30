import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

const TelaProduto = () => {
    const navegation = useNavigation<propsStack>()
    const schema = yup.object().shape({
        cep: yup.string()
            .matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido')
            .required('CEP é obrigatório'),
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data) {
        console.log(data.cep)
    }
    return (
        <ScrollView>
            <View style={styles.cabecalho}>
                <View style={styles.cabecalhoImg}>
                    <Image
                        style={{ width: 180, height: 190, }}
                        source={require('./ppp.jpeg')} />
                </View>
                <View style={styles.cabecalhoTxt}>
                    <Text style={styles.txt}>Caipira Shop Vendas Online
                        Os itens de informatica vc encontra aqui!
                    </Text>
                </View>
            </View>
            <View style={styles.conteudoPrincipal}>
                <View style={styles.produtosImg}>
                    <Pressable>
                        <Text style={styles.produtosTxxt}>Apple IPhone 13 128GB Tela 6,1 12MP</Text>

                        <Image
                            source={require('./55501ddea2d0e5c21eb223c394594beb (1).webp')}
                            style={{ width: 212, height: 380, }}
                            resizeMode='center' />

                        <Text style={styles.produtosTxtt}>R$ 4.300 Ou 10x De 430 sem juros.</Text>
                    </Pressable>
                </View>

                <View>
                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, onBlur, value,} }) => (
                            <TextInput
                                style={{ backgroundColor: '#999', width: 250, margin: 10, height: 55, }}
                                placeholder='Digite Seu CEP'
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.cep && <Text style={styles.labelError}>{errors.cep?.message}</Text>}


                    <View style={styles.fret}>
                        <View >
                            <Text style={styles.fretPrimeiraOpcao}>
                                Receba em até 19 dias úteis
                                Após o pagamento confirmado
                                Frete Grátis</Text>
                        </View>
                        <View>
                            <Text>Entrega: 13 - 30 de Mar.
                                De China para Brasil via AliExpress Standard Shipping </Text>
                        </View>

                        <View>
                            <Text>Retire grátis a partir de quinta-feira em uma agência Mercado Livre</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { handleSubmit }}>
                        <Text style={styles.btnn}>Calcular Frete</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navegation.navigate("MyCarrinho")}>
                        <Text style={styles.btnComprar}>Comprar</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.produtosSelection}>

            </View>
            <View >
                <Text style={styles.descriptionTitle}>Descrição Detalhada Do Produto</Text>
            </View>
            <View style={styles.descriptionTxt}>
                <Text>Notebook acer aspire 5 15.6 fhd i5-10210u 256gb ssd 4gb win 11 home prata - a515-54-579s - nx. Hqmal.00x experimente soluções projetadas para maximizar o resfriamento com coolers duplos, que oferecem vários modos e apresentam tubos térmicos duplos de cobre. Aumente a expulsão de calor em até 10 por cento graças ao teclado com entrada que mantém seu equipamento frio quando o processamento se intensifica. Faça suas criações na tela fhd ou qhd com disponibilidade de sensores touch. Desfrute de 81,18 por cento de proporção de espaço de tela e tecnologias visuais da acer para otimização dinâmica de cores e maior conforto visual. Com a solução acer tnr, o ruído das imagens é reduzido quando há pouca luz. Durante chamadas, o acer purifiedvoice consegue suprimir ativamente o ruído de fundo para ambos os usuários, além de ser funcional com fones de ouvido e microfones externos. Equipado com conectividade wi-fi 6e, ideal para o compartilhamento de arquivos em alta velocidade, além de contar com transmissão perfeita em 4k e tecnologia bluetooth 5.2. Possui porta thunderbolt 4, permitindo a conexão de até dois monitores 4k. Apresenta uma tampa metal e um design com dobradiça de elevação e recursos ergonômicos. Especificações: sistema operacional: windows 10 home 64-bits cpu: intel core i5-10210u quad core (8 threads) frequência: 1.60 ghz até 4.20 ghz 6 mb intel smart cache memória: 4 gb ram ddr4 (4gb soldada + slot livre) ddr4-2133mhz expansível até 20 gb tela: 15,6 led com design ultrafino painel: ips resolução: full hd (1920x1080) proporção 16:9 taxa de atualização: 60 hz tempo de resposta: 25 - 27 ms brilho: 250 nits taxa de contraste: 800:1 color gamut (ntsc): 45 por cento anti reflexo acer comfyview teclado retroiluminado: sim gráfico: gráficos uhd intel para processadores da 10 geração com memória compartilhada com a memória ram áudio: dois alto-falantes estéreo acertrueharmony gen 2 microfone duplo acer purified voice capacidade: 256 gb sdd pcie 3.0 x4 nvme (m.2 2280) upgrade: slot ocupado m.2 2280, funcional com ssd pcie 3.0 nvme x2/x4 de até 512gb (não acompanha). Slot livre sata 3, funcional com hdd ou ssd sata 3 2.5 de até 2tb (não acompanha) webcam: hd com 1280x720 de resolução e gravação de áudio e vídeo em 720p wireless e rede: funcional com iee 802.11a/b/g/n/ac wireless lan suporte a redes com frequência de 2.4 ghz e 5 ghz com tecnologia mimo 1x1 bluetooth 5.0 lan/rede com fio: gigabit ethernet, wake on lan ready segurança: senhas para bios e hdd, trava kensington dimensão e peso (produto) lxpxa: 363.4 x 250.5 x 17.95mm 1.8kg fonte de alimentação: adaptador ac bivolt de 3 pinos (45w) com cabo certificação inmetro bateria: 4 células (li-íon) 48wh autonomia: até 8 horas conteúdo da embalagem: notebook fonte carregadora manual em português imagens de caráter ilustrativo informações divulgadas de acordo com o manual do fabricante produto novo na caixa, lacrado com nf e garantia do fabricante de 1 ano. Em caso de duvidas sobre informações técnicas, utilização, limitações e manuseio do produto, verifique o manual do fabricante.</Text>
            </View>
        </ScrollView>
    )
};



export default TelaProduto;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
    },

    cabecalho: {
        backgroundColor: '#6c2525',
        display: 'flex',
        flexDirection: 'row',
    },
    cabecalhoImg: {
        backgroundColor: '#24b4a5',

    },
    cabecalhoTxt: {
        backgroundColor: '#4169e1',
        width: 250,
    },

    txt: {
        fontSize: 18,
        marginTop: 60,
        color: '#1a1616',

    },

    conteudoPrincipal: {
        backgroundColor: '#000',
    },
    produtosImg: {

    },
    produtosSelection: {

    },
    description: {
        fontSize: 25,
        color: '#2f0909',
    },
    descriptionTitle: {
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        color: '#472a2a',
    },

    fretArea: {
        flexDirection: 'row',
        marginBottom: 50,
    },

    descriptionTxt: {
        backgroundColor: '#1177a3',
        fontSize: 25,
    },

    produtosTxtt: {
        fontSize: 25,
        marginTop: -48,
        paddingLeft: 15,
        width: '100%',
        height: 65,
        maxHeight: 65,
        minHeight: 65,
        color: '#fff',

    },

    btnComprar: {
        width: 115,
        backgroundColor: '#eaeaea',
        height: 70,
        textAlignVertical: 'center',
        textAlign: 'center',
        marginLeft: 280,
        marginTop: -140,
        marginBottom: 22,
    },

    btnn: {
        width: 115,
        height: 70,
        backgroundColor: '#eaeaea',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: -315,
        marginLeft: 280,
    },
    
    fret: {
        flexDirection: 'column',
        height: 200,
        marginLeft: 20,
        backgroundColor: '#fff',
        width: 220,
        marginTop: 20,
        marginBottom: 20,
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff0000',
        marginLeft: 10,
    },
    barra: {
        height: 50,
        width: 220,
        backgroundColor: '#fff',
        marginTop: 50,
        marginLeft: 20,
    },

    inputArea: {
        backgroundColor: '#ccc',

    },

    produtosTxxt: {
        fontSize: 30,
        marginBottom: -35,
        paddingLeft: 15,
        width: '100%',
        maxHeight: 90,
        minHeight: 90,
        color: '#fff',
    },
});

