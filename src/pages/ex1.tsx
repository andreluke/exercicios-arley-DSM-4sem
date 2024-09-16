import React from 'react';
import { View, Button, Alert, StyleSheet, Linking } from 'react-native';

const VideoClicker = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=bYBVCxVwrdY';

  const openYouTube = () => {

    Linking.canOpenURL(videoUrl).then((supported) => {
      if (supported) {
        Linking.openURL(videoUrl).catch((err) => {
          Alert.alert('Erro', 'Não foi possível abrir o YouTube.');
        });
      } else {
        Alert.alert('Erro', 'O YouTube não está instalado ou não pode ser aberto.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Assita aqui!" onPress={openYouTube} />
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

export default VideoClicker;
