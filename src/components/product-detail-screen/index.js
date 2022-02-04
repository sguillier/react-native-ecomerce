import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles'
import { useDispatch } from 'react-redux';

export default function ItemDetailScreen({ navigation, route }) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.selected);

    addProduct = (product) => {
        dispatch({
            type: 'ADD_CART_ITEM',
            product: product,
        })
    }

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

            <Button title="Agregar al carrito" onPress={() => addProduct(product)} />


        </SafeAreaView>
    );
};

