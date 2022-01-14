import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import CardList from '../../components/CardList'
import Filter from '../../components/Filter'
import Header from '../../components/Header'

import { styles } from './styles'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Filter />
      <CardList />
    </SafeAreaView>
  )
}
