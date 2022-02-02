
// Para navigation instalar además requiere configuración
// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// Además, para configurar correctamente visitar links
// https://reactnavigation.org/docs/getting-started/
// https://reactnative.dev/docs/navigation

// Para el menu de la base, basta con instalar
// npm install @react-navigation/bottom-tabs

// Para los iconos instalar y ver pagina 
// npm i react-native-vector-icons
// https://www.npmjs.com/package/react-native-vector-icons (atencion en installation/Android. Pegué lo solicitado al final del archivo indicado y anduvo todo bien)


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from './navShop.js';
import CartStackNavigation from './navCart.js';
import OrdersStackNavigation from './navOrders.js';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer >
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
            }}>
                <BottomTabs.Screen
                    name='Shop'
                    component={ShopStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='home-outline' size={20} />
                        )
                    }}
                />
                <BottomTabs.Screen
                    name='Cart'
                    component={CartStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='cart-outline' size={20} />
                        )
                    }}
                />
                <BottomTabs.Screen
                    name='Order'
                    component={OrdersStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='list-outline' size={20} />
                        )
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}
