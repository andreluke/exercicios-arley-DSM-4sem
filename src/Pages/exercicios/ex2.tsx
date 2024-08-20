import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario: React.FC = () => {
    const [name, setName] = useState("")
    const [idade, setIdade] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmSenha, setConfirmSenha] = useState("")
    const [role, setRole] = useState("admin")
    const [visible, setVisible] = useState(false)

    function handleVisibleIdade() {
        if (idade === "" || name === "") {
            return alert("Preencha o formulário corretamente");
        }
        setVisible(!visible);
    }

    function handleVisibleSenha() {
        if (name === "" || senha === "") {
            return alert("Preencha o formulário corretamente");
        }
        setVisible(!visible);
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.centerTitle}>Cadastro</Text>
                <Text style={styles.title}>Nome:</Text>
                <TextInput
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={setName}
                    style={styles.forms}
                />

                {/* <Text style={styles.title}>Idade:</Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.forms}
                    onChangeText={setIdade} />
                    <Pressable style={styles.button1} onPress={handleVisibleIdade}>Salvar</Pressable> 
                    {visible &&
                        <Text style={styles.title}>{name} - {idade}</Text>
                    }*/}

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    secureTextEntry={true}
                    maxLength={8}
                    style={styles.forms}
                    onChangeText={setSenha} />

                <Text style={styles.title}>Confirmar senha:</Text>
                <TextInput
                    secureTextEntry={true}
                    maxLength={8}
                    style={styles.forms}
                    onChangeText={setConfirmSenha} />


                <Text style={styles.title}>Cargo:</Text>
                <Picker
                    selectedValue={role}
                    onValueChange={(itemValue, itemIndex) =>
                        setRole(itemValue)
                    }
                    style={styles.picker}>
                    <Picker.Item label="Adminsitrador" value="admin" />
                    <Picker.Item label="Gestor" value="manager" />
                    <Picker.Item label="Usuário" value="user" />
                </Picker>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button2}>Logar</TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={handleVisibleSenha}>Cadastrar-se</TouchableOpacity>
                </View>

                {visible &&
                    <Text style={styles.title}>{name} - {senha} - {confirmSenha} - {role}</Text>
                }

            </View>

        </SafeAreaView>
    );
};

export default Formulario;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#2f2f2f",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: "90%",
        height: "50%",
        maxHeight: "80%",
        maxWidth: 270,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#6b6a6a",
        justifyContent: "center",
        paddingTop: 2,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    forms: {
        backgroundColor: "#FFF",
        marginBottom: 8,
        borderRadius: 4,
        height: 20,
        padding: 5,
    },
    title: {
        fontSize: 16,
        color: "#FFF"
    },
    button1: {
        backgroundColor: "#2096f4",
        color: "#FFF",
        marginTop: 12,
        padding: 8,
        textAlign: "center",
        borderRadius: 8
    },
    button2: {
        backgroundColor: "#f4b808",
        color: "#000",
        marginTop: 6,
        padding: 8,
        textAlign: "center",
        borderRadius: 8
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        fontWeight: "bold"
    },
    centerTitle: {
        fontSize: 25,
        color: "#c9ff00",
        alignSelf: "center",
        top: 0
    },
    picker: {
        margin: 4,
        borderRadius: 8,
        padding: 8
    }
})