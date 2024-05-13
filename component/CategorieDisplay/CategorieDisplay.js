import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SalleContext } from '../Cat/Cat';
import CardComponent from '../CardComponent/CardComponent';

const CategorieDisplay = () => {
  const { categorie_list } = useContext(SalleContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categorie List</Text>
      {categorie_list.map((item) => (
        <CardComponent
          key={item._id}
          id={item._id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default CategorieDisplay;