import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    showTime();
  });
  const showTime = () => {
    setTime(`Agora são ${new Date().getHours()} horas e ${new Date().getMinutes()}
minutos`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boa noite!</Text>
      <Button title="Horário" onPress={showTime} />
      <Text style={styles.msg}>{time}</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(48, 47, 47)',
  },
  title: {
  display: 'flex',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#fef'
  },
  msg: {
    fontSize: 20,
    marginTop: 20,
    color: '#fef'
    },
    });