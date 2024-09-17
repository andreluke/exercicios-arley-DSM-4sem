import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions } from "react-native";

const Dois: React.FC = () => {
    const [orientation, setOrientation] = useState<'column' | 'row'>('column');

    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            setOrientation(width > height ? 'row' : 'column');
        };

        // Call the function initially to set the correct orientation on mount
        updateOrientation();

        // Add event listener
        const subscription = Dimensions.addEventListener('change', updateOrientation);

        // Clean up event listener
        return () => {
            subscription?.remove(); // Remove the subscription when the component unmounts
        };
    }, []);

    return (
        <SafeAreaView style={[styles.container, { flexDirection: orientation }]}>
            <View style={styles.top}>
                <Text>Top</Text>
            </View>
            <View style={styles.middle}>
                <Text>Middle</Text>
            </View>
            <View style={styles.bottom}>
                <Text>Bottom</Text>
            </View>
        </SafeAreaView>
    );
};

export default Dois;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#FFA07A',
    },
    middle: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#F08080',
    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#FF6347',
    }
});
