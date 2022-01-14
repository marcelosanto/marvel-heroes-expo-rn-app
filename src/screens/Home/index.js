import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CardList from '../../components/CardList'
import Filter from '../../components/Filter'
import Header from '../../components/Header'

import { styles } from './styles'

import { data } from '../../../assets/application'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Filter />
        <CardList title={'Heróis'} data={data.heroes} />
        <CardList title={'Vilões'} data={data.villains} />
        <CardList title={'Anti-heróis'} data={data.antiHeroes} />
        <CardList title={'Alienigenas'} data={data.aliens} />
        <CardList title={'Humanos'} data={data.humans} />
      </ScrollView>
    </SafeAreaView>
  )
}
