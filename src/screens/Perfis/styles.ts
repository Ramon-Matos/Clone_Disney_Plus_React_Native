import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 50,
    },
    editar: {
        color: 'white',
        fontWeight: '700',
        marginLeft: 260
    },
    assistir: {
        color: 'white',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: '600'
    },
    perfilContainer: {
        marginHorizontal: 70,
        marginTop: 20,
    },
    perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    perfil1: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    perfil2: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: -134,
        
        gap: 10
    },
    perfil3: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginTop: 51,
        gap: 10
    },
    perfil4: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 51,
        paddingBottom: 8,
        gap: 10
    },
    nomes: {
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.6,
        fontWeight: '700'
    }

})