import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { styles } from './styles'

export default ({ icon, backColor, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.backButton,
        { backgroundColor: backColor ? color : 'none' },
      ]}
    >
      <SvgXml width="40" height="40" xml={icon} />
    </TouchableOpacity>
  )
}
