import React from 'react';
import { View, Pressable, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
import logo from "../../assets/fatec.png";

const FATEC: React.FC = () => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.header}>Home</Text>
                <View style={styles.buttonGrid}>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Um</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Dois</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Tres</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Quatro</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Cinco</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Seis</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Sete</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Oito</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Nove</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Dez</Text></Pressable>
            
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FATEC;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#dcdcdc",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: "90%",
        height: "60%",
        maxHeight: "80%",
        maxWidth: 270,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "rgba(107, 106, 106, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    logo: {
        width: 230,
        height: 140,
        marginBottom: 5
    },
    buttonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center", 
        width: "100%",
        paddingHorizontal: 5
    },
    button: {
        backgroundColor: "#f4b414",
        width: 100, 
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 8
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold"
    },
    header:{
        fontSize: 30,
        fontWeight: "bold"
    }
});
