import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { styles } from './styles'

export default ({ item, onPress }) => {
  const name = item.item.name.split(' ')

  const [fontsLoaded, error] = useFonts({
    'gilroy-regular': require('../../../assets/fonts/gilroy-regular.ttf'),
    'gilroy-bold': require('../../../assets/fonts/gilroy-bold.ttf'),
    'gilroy-heavy': require('../../../assets/fonts/gilroy-heavy.ttf'),
    'gilroy-medium': require('../../../assets/fonts/gilroy-medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerCard}>
      <Image style={styles.image} source={{ uri: item.item.imagePath }} />
      <View style={styles.containerCardTitle}>
        <Text
          style={{ color: 'white', fontFamily: 'gilroy-regular', fontSize: 18 }}
        >
          {item.item.alterEgo}
        </Text>
        {name.map((item) => (
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontFamily: 'gilroy-heavy',
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  )
}
