import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import Contacts from 'react-native-contacts';

const PhoneSearcher = () => {
    const [firstNames, setFirstNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                // Solicita permissão para acessar contatos
                const permission = await Contacts.requestPermission();

                if (permission === 'authorized') {
                    // Obtém todos os contatos
                    const contacts = await Contacts.getAll();

                    // Extrai apenas o primeiro nome
                    const names = contacts
                        .filter(contact => contact.givenName) // Filtra contatos que têm um nome
                        .map(contact => contact.givenName as string); // Extrai o primeiro nome

                    setFirstNames(names);
                } else {
                    Alert.alert('Permissão Negada', 'Não foi possível acessar os contatos.');
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.error}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={firstNames}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
    },
    error: {
        color: 'red',
    },
});

export default PhoneSearcher;
