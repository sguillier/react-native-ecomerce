// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CategoriesScreen from '../components/categories-screen/index';
import ListProductsScreen from '../components/list-products-screen/index';
import ProductDetailScreen from '../components/product-detail-screen/index';

const AppNavigation = () => {
    return (
        <NavigationContainer >
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
        </NavigationContainer>
    )
}

export default AppNavigation;