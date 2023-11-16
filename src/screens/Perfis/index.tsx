import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles"
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import { PerfilUnico } from '../../components/Perfil';

export const Perfis = () => {

    return (
        <>
        <LinearGradient style={styles.container} locations={[0.1, 1]} colors={['#3d4155', '#1b1e2b']}>
            <View >
                <TouchableOpacity>
                    <Text style={styles.editar}>
                        EDITAR PERFIS
                    </Text>
                </TouchableOpacity>
                <Text style={styles.assistir}>Quem vai assistir?</Text>
            </View>
        </LinearGradient>
        <View style={{backgroundColor: '#1b1e2b'}}>
            <View style={styles.perfilContainer}>
                {/* <PerfilUnico src={'../../assets/wolwerine.png'} texto= {'Lu'} style={styles.perfil1} /> */}
                <TouchableOpacity style={styles.perfil1}>
                    <Image style={styles.perfil} source={require('../../../assets/wolwerine.png')} />
                    <Text style={styles.nomes}>Lu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../../assets/ember1.png')} />
                    <Text style={styles.nomes}>Anallu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil3}>
                    <Image style={styles.perfil} source={require('../../../assets/ms-marvel-avatar.png')} />
                    <Text style={styles.nomes}>Melissa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../../assets/hawkeye.png')} />
                    <Text style={styles.nomes}>Ramon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil3}>
                    <Image style={styles.perfil} source={require('../../../assets/jean.png')} />
                    <Text style={styles.nomes}>Rannia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../../assets/kim.png')} />
                    <Text style={styles.nomes}>Sandra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil4}>
                    <Image style={styles.perfil} source={require('../../../assets/minnie.png')} />
                    <Text style={styles.nomes}>Sophia</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='inverted' />
        </View>
        </>

    )

}