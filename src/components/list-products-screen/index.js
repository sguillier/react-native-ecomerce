import React from 'react';
import { SafeAreaView, Text, FlatList, View} from 'react-native';
import { styles } from './styles'

import { PRODUCTS } from '../../utils/data/dataProducts.js';
import ProductItem from './product-item/index';

export default function ListProductsScreen({ navigation, route }) {

    const filteredProducts = PRODUCTS.filter(product => product.categoryId == route.params.category.id)

    const goProductDetailScreen = (product) => {
        navigation.navigate('ProductDetailScreen', {product: product, categoryColor:route.params.category.color} );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={filteredProducts}
                    renderItem={({ item }) => (
                        <ProductItem product={item} goProductDetailScreen={goProductDetailScreen} color={route.params.category.color}/>
                    )}
                />
            </View>
        </SafeAreaView>
    );

};


