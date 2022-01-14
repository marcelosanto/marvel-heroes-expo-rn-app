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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{ color: 'gray', fontSize: 15 }}>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index}
        renderItem={(item, index) => (
          <CardListItem item={item} onPress={() => handleEnterPerfil(item)} />
        )}
      />
    </SafeAreaView>
  )
}
