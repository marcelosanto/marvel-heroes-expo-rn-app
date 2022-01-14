import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { vilain } from '../../../assets/icons/icons'
import { styles } from './styles'

export default ({ icon, backColor }) => {
  return (
    <TouchableOpacity style={backColor ? styles.backButton : 'none'}>
      <SvgXml width="40" height="40" xml={icon} />
    </TouchableOpacity>
  )
}
