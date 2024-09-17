import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions } from "react-native";

const Tres: React.FC = () => {
    const [orientation, setOrientation] = useState<'column' | 'row'>('column');
    const [colors, setColors] = useState({
        top: '#FFA07A',
        middle: '#F08080',
        bottom: '#FF6347'
    });

    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            const newOrientation = width > height ? 'row' : 'column';
            setOrientation(newOrientation);

            // Define colors based on orientation
            const newColors = newOrientation === 'row' ? {
                top: '#f9fad2', // Teal for landscape
                middle: '#eedd83', // LightSeaGreen for landscape
                bottom: '#bdb76b' // MediumSeaGreen for landscape
            } : {
                top: '#FFA07A', // LightSalmon for portrait
                middle: '#F08080', // LightCoral for portrait 
                bottom: '#FF6347' // Tomato for portrait
            };
            setColors(newColors);
        };

        // Call the function initially to set the correct orientation on mount
        updateOrientation();

        // Add event listener
        const subscription = Dimensions.addEventListener('change', updateOrientation);

        // Clean up event listener
        return () => {
            subscription?.remove();
        };
    }, []);

    return (
        <SafeAreaView style={[styles.container, { flexDirection: orientation }]}>
            <View style={[styles.top, { backgroundColor: colors.top }]}>
                <Text>Top</Text>
            </View>
            <View style={[styles.middle, { backgroundColor: colors.middle }]}>
                <Text>Middle</Text>
            </View>
            <View style={[styles.bottom, { backgroundColor: colors.bottom }]}>
                <Text>Bottom</Text>
            </View>
        </SafeAreaView>
    );
};

export default Tres;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    middle: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});
