

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CategoriesScreen from '../components/categories-screen/index';
import ListProductsScreen from '../components/list-products-screen/index';
import ProductDetailScreen from '../components/product-detail-screen/index';

export default function ShopStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='CategoriesScreen'
        >
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={{ title: 'Categorias' }}
            />
            <Stack.Screen
                name="ListProductsScreen"
                component={ListProductsScreen}
                options={({ route }) => ({
                    title: route.params.category.title,
                    headerStyle: {
                        backgroundColor: route.params.category.color
                    },
                })}
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={({ route }) => ({
                    title: route.params.product.name,
                    headerStyle: {
                        backgroundColor: route.params.categoryColor
                    },
                })}
            />
        </Stack.Navigator>
    )
}

