import React, { useContext } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

import { UserContext } from '../../context/UserContext'
import { age, height, universe, weight } from '../../../assets/icons/icons'
import BarProgress from '../../components/BarProgress'

export default () => {
  const { state } = useContext(UserContext)
  const { alterEgo, name, imagePath, biography, caracteristics, abilities } =
    state.perfil.item

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
                <Text style={{ color: 'white' }}>30 anos</Text>
              </View>
              <View>
                <SvgXml width="40" height="40" xml={weight} />
                <Text style={{ color: 'white' }}>78Kg</Text>
              </View>
              <View>
                <SvgXml width="40" height="40" xml={height} />
                <Text style={{ color: 'white' }}>1.80m</Text>
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
          <View style={{ backgroundColor: 'red', width: '100%', height: 700 }}>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
