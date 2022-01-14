import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

export default ({ item, onPress }) => {
  const name = item.item.name.split(' ')

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerCard}>
      <Image style={styles.image} source={{ uri: item.item.imagePath }} />
      <View style={styles.containerCardTitle}>
        <Text style={{ color: 'white' }}>{item.item.alterEgo}</Text>
        {name.map((item) => (
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  )
}
