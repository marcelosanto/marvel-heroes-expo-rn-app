import React from 'react'
import { View, Text } from 'react-native'
import { ProgressBar } from 'react-native-splited-progress-bar'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default ({ title, porcetagem }) => {
  const [fontsLoaded, error] = useFonts({
    'gilroy-regular': require('../../../assets/fonts/gilroy-regular.ttf'),
    'gilroy-heavy': require('../../../assets/fonts/gilroy-heavy.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
      }}
    >
      <Text style={{ color: 'white', fontFamily: 'gilroy-regular' }}>
        {title}
      </Text>
      <ProgressBar
        compeletedColor={'#FFF'}
        inCompeletedColor={'#686868'}
        percentage={porcetagem}
        splited={true}
      />
    </View>
  )
}
