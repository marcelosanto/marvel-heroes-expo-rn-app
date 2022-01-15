import React from 'react'
import { View, Text } from 'react-native'
import { ProgressBar } from 'react-native-splited-progress-bar'

export default ({ title, porcetagem }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
      <ProgressBar
        compeletedColor={'#FFF'}
        inCompeletedColor={'#686868'}
        percentage={porcetagem}
        splited={true}
      />
    </View>
  )
}
