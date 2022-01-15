import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CardList from '../../components/CardList'
import Filter from '../../components/Filter'
import Header from '../../components/Header'

import { styles } from './styles'

import { data } from '../../../assets/application'
import { UserContext } from '../../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)

  const [hero, setHero] = useState()
  const [vilao, setVilao] = useState()
  const [antiheroi, setAntiheroi] = useState()
  const [alienn, setAlienn] = useState()
  const [humano, setHumano] = useState()

  useEffect(() => {
    setHero(state.filterHeroi)
    setVilao(state.filterVilao)
    setAntiheroi(state.filterAntiHeroi)
    setAlienn(state.filterAlien)
    setHumano(state.filterHumano)
  }, [
    state.filterHeroi,
    state.filterVilao,
    state.filterAntiHeroi,
    state.filterAlien,
    state.filterHumano,
  ])

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Filter />
        {hero && <CardList title={'Heróis'} data={data.heroes} />}
        {vilao && <CardList title={'Vilões'} data={data.villains} />}
        {antiheroi && <CardList title={'Anti-heróis'} data={data.antiHeroes} />}
        {alienn && <CardList title={'Alienigenas'} data={data.aliens} />}
        {humano && <CardList title={'Humanos'} data={data.humans} />}
      </ScrollView>
    </SafeAreaView>
  )
}
