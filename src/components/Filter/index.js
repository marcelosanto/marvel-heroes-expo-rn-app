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

  const handleFilter = (filter) => {
    if (filter == 'hero') {
      setHeroi((heroi) => !heroi)
    }
  }

  useEffect(() => {
    dispatch({
      type: 'setFilterHeroi',
      payload: {
        filterHeroi: heroi,
      },
    })
  }, [heroi])

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
          color={'#3eadcf'}
        />
        <Button
          onPress={() => handleFilter('vilain')}
          icon={vilain}
          backColor={true}
          color={'#a40606'}
        />
        <Button
          onPress={() => handleFilter('antihero')}
          icon={antihero}
          backColor={true}
          color={'#864ba2'}
        />
        <Button
          onPress={() => handleFilter('alien')}
          icon={alien}
          backColor={true}
          color={'#74f2ce'}
        />
        <Button
          onPress={() => handleFilter('human')}
          icon={human}
          backColor={true}
          color={'#e58c8a'}
        />
      </View>
    </SafeAreaView>
  )
}
