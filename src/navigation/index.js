// Esto para el navegador
// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

// Para el menu de la base
// npm install @react-navigation/bottom-tabs

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from './shop.js';
import CartStackNavigation from './cart.js';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

export default function AppNavigation () {
    return (
        <NavigationContainer >
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
            }}>
                <BottomTabs.Screen
                    name='Shop'
                    component={ShopStackNavigation} 
                    // options={{
                    //     tabBarIcon: ({ focused }) => (
                    //         <Ionicons name='home-outline' size={20} />
                    //     )          
                    // }}
                        
                />
                <BottomTabs.Screen
                    name='Cart'
                    component={CartStackNavigation}
                    // options={{
                    //     tabBarIcon: ({ focused }) => (
                    //         <Ionicons name='cart-outline' size={20} />
                    //     )
                    // }} 
                    />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}
