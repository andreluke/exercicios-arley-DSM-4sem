import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions, TextInput, FlatList } from "react-native";

const Cinco: React.FC = () => {
    const [orientation, setOrientation] = useState<'column' | 'row'>('column');
    const [colors, setColors] = useState({
        top: '#FFA07A',
        bottom: '#FF6347'
    });
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState<string[]>([]);

    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            const newOrientation = width > height ? 'row' : 'column';
            setOrientation(newOrientation);

            const newColors = newOrientation === 'row' ? {
                top: '#eedd83',
                bottom: '#bdb76b'
            } : {
                top: '#FFA07A',
                bottom: '#FF6347'
            };
            setColors(newColors);
        };

        updateOrientation();

        const subscription = Dimensions.addEventListener('change', updateOrientation);

        return () => {
            subscription?.remove();
        };
    }, []);

    const handleAddName = () => {
        if (name.trim()) {
            setNameList([...nameList, name.trim()]);
            setName('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.content, { flexDirection: orientation }]}>
                <View style={[styles.section, { backgroundColor: colors.top }]}>
                    <Text style={styles.text}>Campo Superior/Esquerda</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite um nome"
                        value={name}
                        onChangeText={setName}
                        onSubmitEditing={handleAddName}
                        returnKeyType="done"
                    />
                </View>
                <View style={[styles.section, { backgroundColor: colors.bottom }]}>
                    <FlatList
                        data={nameList}
                        renderItem={({ item }) => (
                            <View style={styles.listItemContainer}>
                                <Text style={styles.listItem}>{item}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Cinco;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    section: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        width: '100%'
    },
    text: {
        fontSize: 18,
        color: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        width: '100%',
        borderRadius: 5,
        backgroundColor: "#FFF"
    },
    listContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',  // Faz com que o item se estique na largura disponível
        paddingVertical: 10,
    },
    listItemContainer: {
        width: '100%',  // Faz com que o contêiner do item ocupe toda a largura
    },
    listItem: {
        fontSize: 18,
        color: '#000',
        marginVertical: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#000",
        paddingVertical: 5,
        width: '100%',  // Garante que o item ocupe toda a largura disponível
    },
});
