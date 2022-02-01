import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'


const ItemDetailScreen = ({ navigation, route }) => {

    console.log('hola:  ', route.params.product.name)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textTitle}> Descipcion:</Text>
                <Text style={styles.text}>{route.params.product.description}</Text>
            </View>
            <View>
                <Text style={styles.textTitle}> Peso:</Text>
                <Text style={styles.text}>{route.params.product.weight}</Text>
            </View>
            <View>
                <Text style={styles.textTitle}> Precio:</Text>
                <Text style={styles.text}>{route.params.product.price}</Text>
            </View>

        </SafeAreaView>
    );
};


export default ItemDetailScreen;
