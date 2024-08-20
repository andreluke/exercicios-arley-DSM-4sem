import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import "../../assets/adaptive-icon.png";

function geraAlerta(){
    return alert("AAAAAAAAAAAAAAAAAAAAAA")
}

const Um: React.FC = () => {
    return (
        <View style={styles.pai}>
            <View style={styles.cima}>
                <View style={styles.cantoEsquerda}>
                    <TouchableOpacity onPress={geraAlerta} style={{
                        justifyContent: "center", alignItems:"center", flex: 1
                    }}><Image source={require("../../assets/adaptive-icon.png")} style={styles.image} resizeMode="cover" /></TouchableOpacity>
                </View>
                <View style={styles.cantoDireita}>
                    <View style={styles.cantoDireitaCima}>
                        <TouchableOpacity onPress={geraAlerta} style={{
                            justifyContent: "center", alignItems:"center", flex: 1
                        }}><Image source={require("../../assets/adaptive-icon.png")} style={styles.image} resizeMode="cover" /></TouchableOpacity>
                    </View>
                    <View style={styles.cantoDireitaBaixo}>
                        <TouchableOpacity onPress={geraAlerta} style={{
                            justifyContent: "center", alignItems:"center", flex: 1,
                        }}><Image source={require("../../assets/adaptive-icon.png")} style={styles.image} resizeMode="cover" /></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.baixo}>
                <TouchableOpacity onPress={geraAlerta} style={{
                    justifyContent: "center", alignItems:"center", flex: 1
                }}><Image source={require("../../assets/adaptive-icon.png")} style={styles.image} resizeMode="cover" /></TouchableOpacity>
            </View>
        </View>
    );
};

export default Um;

const styles = StyleSheet.create({
    pai: {
        flex: 1,
        flexDirection: "column"
    },
    cima: {
        flexDirection: "row",
        flex: 0.5
    },
    baixo: {
        backgroundColor: "salmon",
        flex: 0.5
    },
    cantoEsquerda: {
        flex: 0.5,
        backgroundColor: "lime"
    },
    cantoDireita: {
        flex: 0.5,
        flexDirection: "column"
    },
    cantoDireitaCima: {
        flex: 0.5,
        backgroundColor: "teal"
    },
    cantoDireitaBaixo: {
        flex: 0.5,
        backgroundColor: "skyblue"
    },
    image: {
        width: 64,
        height: 64,
        resizeMode: "cover"
    }
})