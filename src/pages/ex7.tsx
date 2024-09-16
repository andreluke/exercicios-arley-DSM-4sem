import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ScrollImage = () => {
  const [images, setImages] = useState<string[]>([]);

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da sua permissão para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da sua permissão para acessar a câmera!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
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

      <ScrollView contentContainerStyle={styles.scrollView}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
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
  scrollView: {
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: '90%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default ScrollImage;
