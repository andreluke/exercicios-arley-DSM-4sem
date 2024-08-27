import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
interface Props extends NativeStackScreenProps<RootStackParamList, "Home"> { }
const Home: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>HOME</Text>
            <View style={styles.rowButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Morning")}
                >
                    <Text style={styles.buttonLabel}>Manhã</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Afternoon")}
                >
                    <Text style={styles.buttonLabel}>Tarde</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Night")}
                >
                    <Text style={styles.buttonLabel}>Noite</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Home;