import React from 'react';
import { styles } from "./styles"
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress = {() => navigation.goBack()}>
                <Image source={require('../../assets/free-arrow-left-icon-3099-thumb.png')} style={styles.backImage} />
            </TouchableOpacity>
            <Image source={require('../../assets/logo-disneyplus-branca-1024.png')} style={styles.logo} />
            <Text style={styles.texto}>Use o seu e-mail para entrar</Text>
            <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor='gray'></TextInput>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfis')}>
                <Text style={styles.textButton}>
                    CONTINUAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textoFinalButton}>
                <Text style={styles.textoFinal}>
                    Não tem Disney+?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.assinarButton}>
                <Text style={styles.assinar}>
                    ASSINAR
                </Text>
            </TouchableOpacity>
            <StatusBar style='inverted' />
        </View>
    )
}