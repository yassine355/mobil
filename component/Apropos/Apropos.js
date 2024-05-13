import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import logo from './Images/logo.png';
import * as Animatable from 'react-native-animatable';

const Apropos = () => {
  return (
    <View style={styles.container}>

        <Image source={logo} style={styles.image} resizeMode="contain" />

      <Animatable.View style={styles.rightSection} animation="fadeInRight">
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.description}>
          Venue Finder, un système de réservation de salles en ligne innovant et convivial, 
          conçu pour simplifier le processus de réservation. Grâce à un outil de recherche performant, 
          Venue Finder permet aux utilisateurs d'identifier facilement la salle adaptée à leurs besoins, 
          garantissant ainsi une expérience utilisateur optimale du début à la fin de leur réservation.

        </Text>
      </Animatable.View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  leftSection: {
    marginBottom: 20,
  },
  rightSection: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

export default Apropos;