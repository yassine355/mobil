import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import headerlogo from './Images/headerlogo.webp';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={headerlogo} style={styles.imageBackground}>
        <View style={styles.content}>
          <Text style={styles.title}>VENUE FINDER</Text>
          <Text style={styles.description}>
            Les raisons d'avoir accès à un lieu de rencontre professionnel ne manquent
            pas. Heureusement, nous offrons un choix de plus de dix mille salles de
            réunion. Tirez parti de nos espaces de toutes les tailles. Réservez la
            pièce qui vous convient pour la période qui vous convient en seulement
            quelques minutes.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>voir categorie</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    borderRadius: 15,
    backgroundColor : 'grey' ,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-end',
  },
  content: {
    padding: 20,
    
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 22,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#747474',
    fontSize: 13,
    fontWeight: '300',
  },
});

export default Header;