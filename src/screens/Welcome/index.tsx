import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles"
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';



export const Welcome = ({navigation}) => {
    return (
        <ImageBackground source={require('../../../assets/disney_plus_background.png')} style={styles.background}>
            <LinearGradient style={styles.conteudo} locations={[0.5, 0.6, 1]} colors={['transparent', '#1b1e2b', '#1b1e2b']}>
                <View style={styles.container}>
                    <Image source={require('../../../assets/logo-disneyplus-branca-1024.png')} style={styles.logo} />
                    <Text style={styles.texto}>As melhores histórias</Text>
                    <Text style={styles.texto}>em um só lugar.</Text>
                    <View style={styles.logosContainer}>
                        <Image source={require('../../../assets/logo-disney-white.png')} style={styles.logos} />
                        <Image source={require('../../../assets/white-plus-icon-3.png')} style={styles.plus} />
                        <Image source={require('../../../assets/imagem_2023-11-16_015220540-removebg-preview.png')} style={styles.logos} />
                        <Image source={require('../../../assets/white-plus-icon-3.png')} style={styles.plus} />
                        <Image source={require('../../../assets/marvel_logo.png')} style={styles.logos} />
                        <Image source={require('../../../assets/white-plus-icon-3.png')} style={styles.plus} />
                        <Image source={require('../../../assets/imagem_2023-11-16_015824069-removebg-preview.png')} style={styles.logos} />
                        <Image source={require('../../../assets/white-plus-icon-3.png')} style={styles.plus} />
                        <Image source={require('../../../assets/imagem_2023-11-16_015939041-removebg-preview.png')} style={styles.logos} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ASSINAR AGORA</Text>
                    </TouchableOpacity>
                    <Text style={styles.textoFinal}> Comece a assistir ao Disney+ por R$ 33,90/mês</Text>
                    <Text style={styles.textoFinal}>ou R$ 279,90/ano. Os preços podem variar em</Text>
                    <Text style={styles.textoFinal}>outras moedas ou plataformas.</Text>
                </View>
                <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.login}>ENTRAR</Text>
                </TouchableOpacity>
            </LinearGradient>
            <StatusBar style='inverted' />
        </ImageBackground>

    )
}