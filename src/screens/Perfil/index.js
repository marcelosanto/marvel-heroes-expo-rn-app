import React, { useContext } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native'

import { styles } from './styles'

import { UserContext } from '../../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)
  const { alterEgo, name, imagePath, biography } = state.perfil.item

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={{
              width: windowWidth,
              height: windowHeight,
              aspectRatio: 1,
              justifyContent: 'flex-end',
            }}
            source={{ uri: imagePath }}
          >
            <View
              style={{
                backgroundColor: 'red',
                marginLeft: 20,
                width: 150,
              }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>{alterEgo}</Text>
              <Text
                style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
              >
                {name}
              </Text>
            </View>
            <View style={{ width: 350, marginHorizontal: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{biography}</Text>
            </View>
          </ImageBackground>

          <View
            style={{ backgroundColor: 'black', width: '100%', height: 700 }}
          >
            <Text style={{ color: 'white' }}>Habilidades</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
