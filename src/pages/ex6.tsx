import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImageButton = () => {
  const [image, setImage] = useState<string | null>(null);

  const openGallery = async () => {
    // Solicita permissão para acessar a galeria
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da sua permissão para acessar a galeria!');
      return;
    }

    // Abre a galeria de fotos
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Salva a URI da imagem selecionada
    }
  };

  const openCamera = async () => {
    // Solicita permissão para acessar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da sua permissão para acessar a câmera!');
      return;
    }

    // Abre a câmera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Salva a URI da foto tirada
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openGallery}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: StatusBar.currentHeight || 0,
    paddingRight: 10,
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default ImageButton;
