import React from 'react';
import { View, Button, Alert, StyleSheet, Linking } from 'react-native';

const PhoneCaller = () => {
  const phoneNumber = 'tel:+5512997990722';

  const openDialer = () => {
    Linking.canOpenURL(phoneNumber).then((supported) => {
      if (supported) {
        Linking.openURL(phoneNumber).catch((err) => {
          Alert.alert('Erro', 'Não foi possível abrir o discador.');
        });
      } else {
        Alert.alert('Erro', 'O discador não está disponível.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Ligar para André Lucas" onPress={openDialer} />
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

export default PhoneCaller;
