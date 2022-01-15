import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../context/UserContext'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    dispatch({
      type: 'setFilterHeroi',
      payload: {
        filterHeroi: true,
      },
    })

    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }],
    })
  }, [])

  return (
    <View>
      <Text>Preload</Text>
    </View>
  )
}
