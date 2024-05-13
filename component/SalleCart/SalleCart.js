import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SalleContext } from '../Cat/Cat';
import SalleDetails from '../SalleDetails/SallaDetails';

const SalleCart = () => {
  const { selectedSalle } = useContext(SalleContext);
  const [showModal, setShowModal] = useState(false);

  const handleCartItemClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.salleCartContainer}>
      <Text style={styles.salleCartTitle}>Salle Cart</Text>
      <TouchableOpacity style={styles.cartItem} onPress={handleCartItemClick}>
        <Image source={{ uri: selectedSalle?.image }} style={styles.cartImage} />
        <View style={styles.cartContent}>
          <Text style={styles.cartItemDescription}>description</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Show detail</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {showModal && (
        <SalleDetails salle={selectedSalle} onClose={closeModal} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  salleCartContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  salleCartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    elevation: 3,
    marginVertical: 10,
  },
  cartImage: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cartContent: {
    flex: 1,
    padding: 15,
  },
  cartItemDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  cartButton: {
    backgroundColor: '#0056b3',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  salleDetailsModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  salleDetailsContent: {
    backgroundColor: '#fefefe',
    borderRadius: 12,
    width: '90%',
    maxWidth: 600,
    elevation: 5,
  },
  salleDetailsHeader: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salleDetailsHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  salleDetailsBody: {
    padding: 20,
  },
  salleDetailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  salleDetailsInfo: {
    flex: 1,
  },
  salleDetailsFooter: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'flex-end',
  },
  reserveButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SalleCart;