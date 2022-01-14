import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { vilain } from '../../../assets/icons/icons'
import { styles } from './styles'

export default ({ icon }) => {
  return (
    <TouchableOpacity style={styles.backButton}>
      <SvgXml width="40" height="40" xml={icon} />
    </TouchableOpacity>
  )
}
