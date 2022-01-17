import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import CardListItem from '../CardListItem'

import { styles } from './styles'
import { UserContext } from '../../context/UserContext'

export default ({ title, data }) => {
  const navigation = useNavigation()
  const { state, dispatch } = useContext(UserContext)

  const handleEnterPerfil = (perfil) => {
    dispatch({
      type: 'setPerfil',
      payload: {
        perfil: perfil,
      },
    })

    navigation.navigate('Perfil')
  }

  let generateRandomNum = () => 'key' + Math.floor(Math.random() * 1001)

  const [fontsLoaded, error] = useFonts({
    'gilroy-bold': require('../../../assets/fonts/gilroy-bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            fontFamily: 'gilroy-bold',
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text
            style={{ color: 'gray', fontSize: 15, fontFamily: 'gilroy-bold' }}
          >
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={(item) => (
          <CardListItem item={item} onPress={() => handleEnterPerfil(item)} />
        )}
      />
    </SafeAreaView>
  )
}
