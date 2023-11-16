import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        height: 510,
    },
    conteudo: {
        flex: 1,
        // marginTop: 65,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 380,
        gap: 9
        // justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        // marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        height: 135,
        gap: 6
    },
    logo: {
        resizeMode: 'contain',
        width: 210,
        height: 120,
    },
    texto: {
        letterSpacing: 0.8,
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    },
    logos: {
        resizeMode: 'contain',
        width: 44,
        height: 50,
    },
    logosContainer: {
        flexDirection: "row",
        gap: 7,
    },
    plus: {
        resizeMode: 'contain',
        paddingTop: 50,
        width: 15,
        height: 15
    },
    button: {
        borderRadius: 4,
        height: 48,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0072D2'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 2.5
    },
    textoFinal: {
       color: '#c0c0c0', 
       textAlign: 'center', 
       marginHorizontal: 20,
    },

    login: {
        color: 'white', 
        fontWeight: '500', 
        textAlign: 'center', 
        marginTop: 15,
        letterSpacing: 3
    }

})