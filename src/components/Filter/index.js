import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { styles } from './styles'

import {
  alien,
  antihero,
  hero,
  vilain,
  human,
} from '../../../assets/icons/icons'
import Button from '../Button'
import { UserContext } from '../../context/UserContext'

export default () => {
  const { state, dispatch } = useContext(UserContext)
  const [heroi, setHeroi] = useState(true)
  const [vilao, setVilao] = useState(true)
  const [antiheroi, setAntiheroi] = useState(true)
  const [alienn, setAlienn] = useState(true)
  const [humano, setHumano] = useState(true)

  const handleFilter = (filter) => {
    if (filter == 'hero') {
      setHeroi((heroi) => !heroi)
    }
    if (filter == 'vilain') {
      setVilao((vilao) => !vilao)
    }
    if (filter == 'antihero') {
      setAntiheroi((antiheroi) => !antiheroi)
    }
    if (filter == 'alien') {
      setAlienn((alienn) => !alienn)
    }
    if (filter == 'human') {
      setHumano((humano) => !humano)
    }
  }

  useEffect(() => {
    dispatch({
      type: 'setFilterHeroi',
      payload: {
        filterHeroi: heroi,
      },
    })
    dispatch({
      type: 'setFilterVilao',
      payload: {
        filterVilao: vilao,
      },
    })
    dispatch({
      type: 'setFilterAntiHeroi',
      payload: {
        filterAntiHeroi: antiheroi,
      },
    })
    dispatch({
      type: 'setFilterAlien',
      payload: {
        filterAlien: alienn,
      },
    })
    dispatch({
      type: 'setFilterHumano',
      payload: {
        filterHumano: humano,
      },
    })
  }, [heroi, vilao, antiheroi, alienn, humano])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.textTitle}>Escolha o seu</Text>
        <Text style={styles.textTitle}>Personagem</Text>
      </View>
      <View style={styles.filter}>
        <Button
          onPress={() => handleFilter('hero')}
          icon={hero}
          backColor={true}
          color={heroi ? '#3eadcf' : 'gray'}
        />
        <Button
          onPress={() => handleFilter('vilain')}
          icon={vilain}
          backColor={true}
          color={vilao ? '#a40606' : 'gray'}
        />
        <Button
          onPress={() => handleFilter('antihero')}
          icon={antihero}
          backColor={true}
          color={antiheroi ? '#864ba2' : 'gray'}
        />
        <Button
          onPress={() => handleFilter('alien')}
          icon={alien}
          backColor={true}
          color={alienn ? '#74f2ce' : 'gray'}
        />
        <Button
          onPress={() => handleFilter('human')}
          icon={human}
          backColor={true}
          color={humano ? '#e58c8a' : 'gray'}
        />
      </View>
    </SafeAreaView>
  )
}
