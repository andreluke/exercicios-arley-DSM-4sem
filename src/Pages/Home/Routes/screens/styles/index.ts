import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d3d3d3", // Cor de fundo cinza
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000", // Cor preta para o título
    },
    rowButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#FFA500", // Cor de fundo laranja
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10, // Espaçamento entre os botões
        width: 200, // Largura fixa para os botões
    },
    buttonLabel: {
        color: "#000", // Cor preta para o texto dos botões
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default styles;
