import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Perfil from '../screens/Perfil'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={Home}
    />
    <Stack.Screen
      options={{ headerTitle: false }}
      name="Perfil"
      component={Perfil}
    />
  </Stack.Navigator>
)
