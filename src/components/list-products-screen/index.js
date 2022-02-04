import React from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';

import { PRODUCTS } from '../../utils/data/dataProducts.js';
import ProductItem from './product-item/index';
// import { selectProduct } from '../../store/actions/products.action';

export default function ListProductsScreen({ navigation, route }) {
    const dispatch = useDispatch()

    // const filteredProducts = PRODUCTS.filter(product => product.categoryId == route.params.category.id)
    const filteredProducts = useSelector(state => state.products.filteredProducts)
    
    // const category = useSelector(state => state.categories.selected);

    const goProductDetailScreen = (product) => {
        // dispatch(selectProduct(product.id));
        dispatch({
            type: 'SELECT_PRODUCT',
            productId: product.id,
        })
        navigation.navigate('ProductDetailScreen', { 
            product: product, 
            categoryColor: route.params.category.color 
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={filteredProducts}
                    renderItem={({ item }) => (
                        <ProductItem product={item} goProductDetailScreen={goProductDetailScreen} color={route.params.category.color} />
                    )}
                />
            </View>
        </SafeAreaView>
    );

};


