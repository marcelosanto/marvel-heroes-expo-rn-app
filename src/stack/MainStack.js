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
      options={{
        headerTransparent: true,
        headerTintColor: 'white',
        title: '',
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, .15)',
        },
      }}
      name="Perfil"
      component={Perfil}
    />
  </Stack.Navigator>
)
