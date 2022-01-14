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
        <Button icon={hero} backColor={true} color={'#3eadcf'} />
        <Button icon={vilain} backColor={true} color={'#a40606'} />
        <Button icon={antihero} backColor={true} color={'#864ba2'} />
        <Button icon={alien} backColor={true} color={'#74f2ce'} />
        <Button icon={human} backColor={true} color={'#e58c8a'} />
      </View>
    </SafeAreaView>
  )
}
