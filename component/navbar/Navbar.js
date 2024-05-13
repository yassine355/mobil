import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from './Images/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState('ACCUEIL');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigation = useNavigation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Text>{menu}</Text>
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              onPress={() => {
                setMenu('ACCUEIL');
                setShowDropdown(false);
                navigation.navigate('Home');
              }}
              style={[styles.dropdownItem, menu === 'ACCUEIL' && styles.active]}
            >
              <Text>ACCUEIL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenu('A PROPOS');
                setShowDropdown(false);
                navigation.navigate('About');
              }}
              style={[styles.dropdownItem, menu === 'A PROPOS' && styles.active]}
            >
              <Text>A PROPOS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenu('SALLES');
                setShowDropdown(false);
                navigation.navigate('Salles');
              }}
              style={[styles.dropdownItem, menu === 'SALLES' && styles.active]}
            >
              <Text>CATEGORIE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenu('CONTACTER NOUS');
                setShowDropdown(false);
                navigation.navigate('Contact');
              }}
              style={[
                styles.dropdownItem,
                menu === 'CONTACTER NOUS' && styles.active,
              ]}
            >
              <Text>CONTACTER NOUS</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 1,
  },
    dropdownItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent', // Assuming you need this property as well
  },
    active: {
    borderLeftColor: '#007AFF',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});

export default Navbar;