import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

import { marvel, menu, search } from '../../../assets/icons/icons'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <SvgXml width='36' height='36' xml={menu} />
      <SvgXml width='100' height='100' xml={marvel} />
      <SvgXml width='36' height='36' xml={search} />
    </SafeAreaView>
  )
}
