import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import CardListItem from '../CardListItem'

import { styles } from './styles'

import { data } from '../../../assets/application'

export default () => {
  console.log(data.humans.length)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>
          Herois
        </Text>
        <TouchableOpacity>
          <Text style={{ color: 'gray', fontSize: 15 }}>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={data.heroes}
        renderItem={(item) => (
          <CardListItem item={item} key={item.index.toString()} />
        )}
      />
    </SafeAreaView>
  )
}
