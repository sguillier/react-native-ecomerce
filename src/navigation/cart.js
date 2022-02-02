

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CartScreen from '../components/cart-screen/index.js';


export default function CartStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
        >
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{ title: 'Carrito' }}
            />
        </Stack.Navigator>
    )
}

