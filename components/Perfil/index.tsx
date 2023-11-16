import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

interface PerfilProps {
    src: string;
    texto: string;
    style: {};
}

export const PerfilUnico = ({ src, texto, style }: PerfilProps) => {
    return (
        <View style={style}>
            {/* <Image style={styles.perfil} source={require(src)} /> */}
            <Text>{texto}</Text>
        </View>
    )
}