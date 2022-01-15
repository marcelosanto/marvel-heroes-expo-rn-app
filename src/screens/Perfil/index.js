import React, { useContext } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  View,
  Dimensions,
  Image,
} from 'react-native'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

import { UserContext } from '../../context/UserContext'
import { age, height, universe, weight } from '../../../assets/icons/icons'
import BarProgress from '../../components/BarProgress'

export default () => {
  const { state } = useContext(UserContext)
  const {
    alterEgo,
    name,
    imagePath,
    biography,
    caracteristics,
    abilities,
    movies,
  } = state.perfil.item

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
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
                marginLeft: 20,
                width: 150,
                marginBottom: 30,
              }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>{alterEgo}</Text>
              <Text
                style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
              >
                {name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 380,
                marginBottom: 40,
              }}
            >
              <View>
                <SvgXml width="40" height="40" xml={age} />
                <Text style={{ color: 'white' }}>
                  {2022 - caracteristics.birth} anos
                </Text>
              </View>
              <View>
                <SvgXml width="40" height="40" xml={weight} />
                <Text style={{ color: 'white' }}>
                  {caracteristics.weight.value}Kg
                </Text>
              </View>
              <View>
                <SvgXml width="40" height="40" xml={height} />
                <Text style={{ color: 'white' }}>
                  {caracteristics.height.value}m
                </Text>
              </View>
              <View>
                <SvgXml width="40" height="40" xml={universe} />
                <Text style={{ color: 'white' }}>
                  {caracteristics.universe}
                </Text>
              </View>
            </View>
            <View style={{ width: 350, marginHorizontal: 20 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{biography}</Text>
            </View>
          </ImageBackground>

          <View
            style={{ backgroundColor: 'black', width: '100%', height: 360 }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              Habilidades
            </Text>
            <BarProgress title={'Força'} porcetagem={abilities.force} />
            <BarProgress
              title={'Inteligência'}
              porcetagem={abilities.intelligence}
            />
            <BarProgress title={'Agilidade'} porcetagem={abilities.agility} />
            <BarProgress
              title={'Resistência'}
              porcetagem={abilities.endurance}
            />
            <BarProgress title={'Velocidade'} porcetagem={abilities.velocity} />
          </View>
          <View
            style={{ backgroundColor: 'black', width: '100%', height: 400 }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 20,
              }}
            >
              Filmes
            </Text>
            <ScrollView horizontal={true}>
              {movies.map((item) => (
                <Image
                  style={{
                    borderRadius: 25,
                    width: 200,
                    height: 300,
                    margin: 20,
                  }}
                  source={{ uri: item }}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
