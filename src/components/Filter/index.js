import React from 'react'
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

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.textTitle}>Escolha o seu</Text>
        <Text style={styles.textTitle}>Personagem</Text>
      </View>
      <View style={styles.filter}>
        <Button icon={hero} />
        <Button icon={vilain} />
        <Button icon={antihero} />
        <Button icon={alien} />
        <Button icon={human} />
      </View>
    </SafeAreaView>
  )
}
