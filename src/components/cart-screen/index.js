import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'



export default function CartScreen({ navigation, route }) {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Aqui posteriormente se incluiran los productos del carrito</Text>
            </View>
        </SafeAreaView>
    );
};
