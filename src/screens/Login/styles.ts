import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#1b1e2b',
        paddingHorizontal: 18,
        paddingTop: 48,
    },
    back: {
        borderRadius: 30,
        height: 26,
        width: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    backImage: {
        width: 22,
        height: 13
    },
    logo: {
        resizeMode: 'contain',
        width: 380,
        height: 65,
        marginTop: -17
    },
    texto: {
        textAlign: 'left',
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginTop: 10,
        marginLeft: 6
    },
    input: {
        backgroundColor: '#2b2d33',
        height: 70,
        width: 365,
        marginLeft: 6,
        marginTop: 25,
        borderRadius: 4,
        paddingLeft: 12,
        color: 'gray'
    },
    button: {
        backgroundColor: '#0072D2',
        height: 50,
        width: 365,
        marginLeft: 6,
        marginTop: 22,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 2.2
    },
    textoFinalButton: {
        marginLeft: 8,
        marginTop: 24,
    },
    textoFinal: {
        color: '#bec1d3'
    },
    assinarButton: {
        marginLeft: 10,
        marginTop: 18,
    },
    assinar: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    }

})