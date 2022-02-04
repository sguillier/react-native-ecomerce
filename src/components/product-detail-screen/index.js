import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles'


export default function ItemDetailScreen ({ navigation, route }) {
    const product = useSelector(state => state.products.selected);
    // const product = route.params.product;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textTitle}> Descipcion:</Text>
                <Text style={styles.text}>{product.description}</Text>
            </View>
            <View>
                <Text style={styles.textTitle}> Peso:</Text>
                <Text style={styles.text}>{product.weight}</Text>
            </View>
            <View>
                <Text style={styles.textTitle}> Precio:</Text>
                <Text style={styles.text}>{product.price}</Text>
            </View>

        </SafeAreaView>
    );
};

