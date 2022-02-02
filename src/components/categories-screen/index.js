import React from 'react';
import { SafeAreaView, FlatList, View, } from 'react-native';
import { styles } from './styles'

import CategoryItem from './category-item/index';
import { CATEGORIES } from '../../utils/data/dataCategories.js';


export default function CategoriesScreen({ navigation }) {

    const goListProductsScreen = (category) => {
        navigation.navigate('ListProductsScreen', {category: category} );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={CATEGORIES}
                    renderItem={({ item }) => (
                        <CategoryItem category={item} goListProductsScreen={goListProductsScreen} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

