import React from 'react';
import { SafeAreaView, FlatList, View, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles'

import CategoryItem from './category-item/index';
// import { CATEGORIES } from '../../utils/data/dataCategories.js';


export default function CategoriesScreen({ navigation }) {
    const dispatch = useDispatch();

    const goListProductsScreen = (category) => {
        console.log(category);
        dispatch({
            type: 'FILTER_PRODUCTS',
            categoryId: category.id,
        })
        navigation.navigate('ListProductsScreen', {category: category} );
    }
    const categories = useSelector(state => state.categories.categories);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    // data={CATEGORIES}
                    data={categories}
                    renderItem={({ item }) => (
                        <CategoryItem category={item} goListProductsScreen={goListProductsScreen} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

