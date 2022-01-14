import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

export default ({ item }) => {
  console.log(item.item.imagePath)
  return (
    <TouchableOpacity style={styles.containerCard}>
      <Image style={styles.image} source={{ uri: item.item.imagePath }} />
      <View style={styles.containerCardTitle}>
        <Text style={{ color: 'white' }}>{item.item.alterEgo}</Text>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
          Homem
        </Text>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
          Aranha
        </Text>
      </View>
    </TouchableOpacity>
  )
}
