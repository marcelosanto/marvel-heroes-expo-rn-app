import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

import { marvel, menu, search } from '../../../assets/icons/icons'
import Button from '../Button'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button icon={menu} />

      <SvgXml width="100" height="100" xml={marvel} />
      <Button icon={search} />
    </SafeAreaView>
  )
}
