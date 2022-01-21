// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CategoriesScreen from '../components/categories-screen/index';
import ItemDetailScreen from '../components/item-detail-screen/index';
import ListItemsScreen from '../components/list-Items-screen/index';

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='CategoriesScreen'
            >
                <Stack.Screen
                    name="CategoriesScreen"
                    component={CategoriesScreen}
                    options={{ title: 'CategoriesScreen' }}
                />
                <Stack.Screen
                    name="ListItemsScreen"
                    component={ListItemsScreen}
                    options={{ title: 'ListItemsScreen' }}
                />
                <Stack.Screen
                    name="ItemDetailScreen"
                    component={ItemDetailScreen}
                    options={{ title: 'ItemDetailScreen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;