import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import Contacts from 'react-native-contacts';

interface Contact {
  recordID: string;
  displayName: string;
}

const PhoneScroller = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const permission = await Contacts.requestPermission();

        if (permission === 'authorized') {
          const data: Contact[] = await Contacts.getAll();
          if (data.length > 0) {
            const filteredContacts = data.filter(contact =>
              contact.displayName && contact.displayName.startsWith('C')
            );
            setContacts(filteredContacts);
          }
        } else {
          Alert.alert('Permissão Negada', 'Não foi possível acessar os contatos.');
        }
      } catch (err) {
        console.log(err)
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
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.displayName}</Text>
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

export default PhoneScroller;
