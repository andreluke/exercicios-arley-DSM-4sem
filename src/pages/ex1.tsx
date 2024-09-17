import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

const Orientation: React.FC = () => {
    const [mode, setMode] = useState("");

    useEffect(() => {
        // Chama a função que define a orientação inicial
        readOrientation();
        // Limpa o listener quando o componente for desmontado
        return () => {
            ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);

    // Define um listener para mudanças de orientação
    const subscription = ScreenOrientation.addOrientationChangeListener(
        ({ orientationInfo }) => {
            if (
                orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
                orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
            ) {
                setMode("portrait");
            } else if (
                orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
                orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
            ) {
                setMode("landscape");
            }
        }
    );

    // Ler a orientação atual
    const readOrientation = async () => {
        const orientation = await ScreenOrientation.getOrientationAsync();
        if (
            orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
            orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
        ) {
            setMode("portrait");
        } else if (
            orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
            orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
        ) {
            setMode("landscape");
        }
    };

    // Define a cor de fundo com base no modo atual (portrait ou landscape)
    const backgroundColor = mode === "portrait" ? "#FFA500" : "#1E90FF";

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <Text>Tela em modo {mode}</Text>
        </SafeAreaView>
    );
};

export default Orientation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        paddingTop: Constants.statusBarHeight,
    }
});
