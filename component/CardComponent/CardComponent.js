import React, { useContext, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { SalleContext } from '../Cat/Cat';
import SalleCart from '../SalleCart/SalleCart';

const CardComponent = ({ id, name, description, price, image }) => {
  const { addToCart } = useContext(SalleContext);
  const [showSalleCart, setShowSalleCart] = useState(false);

  const handleShowSalles = () => {
    setShowSalleCart(true);
  };

  const handleCloseCart = () => {
    setShowSalleCart(false);
  };

  return (
    
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <Button title="show salles" onPress={handleShowSalles} />
      {showSalleCart && <SalleCart onClose={handleCloseCart} />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  
});

export default CardComponent;