import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions } from "react-native";

const Exercicio4: React.FC = () => {
    const [orientation, setOrientation] = useState<'column' | 'row'>('column');
    const [colors, setColors] = useState({
        header: '#FFA07A',
        middle: '#F08080', // Cor inicial para retrato
        bottom: '#FF6347'  // Cor inicial para retrato
    });

    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            const newOrientation = width > height ? 'row' : 'column';
            setOrientation(newOrientation);

            // Define cores baseadas na orientação
            const newColors = newOrientation === 'row' ? {
                header: '#f9fad2',
                middle: '#eedd83', // Amarelo claro para paisagem
                bottom: '#bdb76b'  // Verde oliva para paisagem
            } : {
                header: '#FFA07A',
                middle: '#F08080', // Coral para retrato
                bottom: '#FF6347'  // Tomate para retrato
            };
            setColors(newColors);
        };

        // Chama a função para definir a orientação inicial
        updateOrientation();

        // Adiciona listener de mudança de orientação
        const subscription = Dimensions.addEventListener('change', updateOrientation);

        // Remove listener na desmontagem do componente
        return () => {
            subscription?.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* Título fixo no topo */}
            <View style={[styles.header, {backgroundColor: colors.header}]}>
                <Text style={styles.headerText}>Exercício 4</Text>
            </View>

            {/* Conteúdo que muda de orientação */}
            <View style={[styles.content, { flexDirection: orientation }]}>
                <View style={[styles.middle, { backgroundColor: colors.middle }]}>
                    <Text style={styles.text}>Middle</Text>
                </View>
                <View style={[styles.bottom, { backgroundColor: colors.bottom }]}>
                    <Text style={styles.text}>Bottom</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Exercicio4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        height: 50, // Altura do título
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        flex: 1,
    },
    middle: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
    }
});
