import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.contentTitle}>Curso de programação</Text>
          <Text style={styles.contentText}>Linguagem React Native</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.contentTitle}>Curso de programação</Text>
          <Text style={styles.contentText}>Linguagem React Native</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.contentTitle}>Curso de programação</Text>
          <Text style={styles.contentText}>Linguagem React Native</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.contentTitle}>Curso de programação</Text>
          <Text style={styles.contentText}>Linguagem React Native</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    padding: 20,
  },
  content: {
    backgroundColor: '#F4A460',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15, // Adicionando margem inferior
  },
  contentImage: {
    marginRight: 15,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  contentText: {
    fontSize: 16,
    color: 'white',
  },
});
