import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Header from '../../components/Header'

import { styles } from './styles'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Home</Text>
    </SafeAreaView>
  )
}
