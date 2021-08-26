import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const frases = ['Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso é a menor distância entre duas pessoas.',
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Tomar uma atitude é o primeiro passo para dar vida ao sonho.'
];

const [image,setImage] = useState(require('./assets/biscoito.png'));
const [text,setText] = useState('');

function gerarIntAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  const quebrarBiscoito = () => {
    setText('"' + frases[gerarIntAleatorio(0,frases.length)]);
    setImage(require('./assets/biscoitoQuebrado.png'));
  }

  const resetarBiscoito = () => {
    setText('');
    setImage(require('./assets/biscoito.png'));
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Image source={require('./assets/biscoito.png')} />
      <Text style={styles.text}>{text}</Text>
      <Button color='blue' mode="contained" onPress={quebrarBiscoito} title="Quebrar Biscoito"></Button>
      <Button color='red' style={styles.button} mode="contained" onPress={resetarBiscoito} title="Resetar"></Button>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 300, height: 300
  },
  text:{
    fontSize:25,
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
