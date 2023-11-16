import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles"
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import { PerfilUnico } from '../../components/Perfil';

export const Perfis = () => {

    return (
        <>
        <LinearGradient style={styles.container} locations={[0.2, 1]} colors={['#3d4155', '#1b1e2b']}>
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
                    <Image style={styles.perfil} source={require('../../assets/wolwerine.png')} />
                    <Text style={{color:'white'}}>Lu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../assets/ember1.png')} />
                    <Text style={{color:'white'}}>Anallu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil3}>
                    <Image style={styles.perfil} source={require('../../assets/ms-marvel-avatar.png')} />
                    <Text style={{color:'white'}}>Melissa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../assets/hawkeye.png')} />
                    <Text style={{color:'white'}}>Ramon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil3}>
                    <Image style={styles.perfil} source={require('../../assets/jean.png')} />
                    <Text style={{color:'white'}}>Rannia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil2}>
                    <Image style={styles.perfil} source={require('../../assets/kim.png')} />
                    <Text style={{color:'white'}}>Sandra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.perfil4}>
                    <Image style={styles.perfil} source={require('../../assets/minnie.png')} />
                    <Text style={{color:'white'}}>Sophia</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='inverted' />
        </View>
        </>

    )

}