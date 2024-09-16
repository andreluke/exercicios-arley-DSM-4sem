import React from 'react';
import { View, Button, Alert, StyleSheet, Linking } from 'react-native';

const InstaFATEC = () => {
  const instagram = 'https://www.instagram.com/fatec_jacarei';

  const openInstagram = () => {

    Linking.canOpenURL(instagram).then((supported) => {
      if (supported) {
        Linking.openURL(instagram).catch((err) => {
          Alert.alert('Erro', 'Não foi possível abrir o Instagram.');
        });
      } else {
        Alert.alert('Erro', 'O Instagram não está instalado ou não pode ser aberto.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Acesse já o instagram da FATEC Jacareí!" onPress={openInstagram} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InstaFATEC;
