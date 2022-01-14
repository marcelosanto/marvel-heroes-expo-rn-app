import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

import { styles } from "./styles";

import {} from "../../../assets/icons/icons";

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.textTitle}>Escolha o seu</Text>
        <Text style={styles.textTitle}>Personagem</Text>
      </View>
    </SafeAreaView>
  );
};
