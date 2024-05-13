import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, TextInput, ScrollView } from 'react-native';

const SalleDetails = ({ salle, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleReserveClick = () => {
    if (!isLoggedIn) {
      alert('Please log in to make a reservation.');
    } else {
      // Proceed with reservation logic
      console.log('Proceeding with reservation...');
    }
  };

  if (salle) {
    return (
      <Modal visible={true} animationType="fade" transparent>
        <View style={styles.salleDetailsModal}>
          <View style={styles.salleDetailsContent}>
            <Text>Loading...</Text>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal visible={true} animationType="fade" transparent>
      <View style={styles.salleDetailsModal}>
        <View style={styles.salleDetailsContent}>
          <View style={styles.salleDetailsHeader}>
            <Text style={styles.salleDetailsHeaderText}></Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.salleDetailsBody}>
            <View style={styles.salleDetailsInfo}>
              <Text>Description: </Text>
              <Text>Tarif: €</Text>
              <Text>Capacité: </Text>
              <Text>Emplacement: </Text>
              <Text>Hauteur sous plafond: mètres</Text>
              <Text>Superficie: m²</Text>
              <Text>Accès handicapé: </Text>
            </View>
          </ScrollView>
          <View style={styles.salleDetailsFooter}>
            <View style={styles.salleDate}>
              <Text style={styles.salleDataLabel}>Date de début:</Text>
              <TextInput
                style={styles.salleDataInput}
                type="date"
                value={startDate}
                onChangeText={setStartDate}
              />
              <Text style={styles.salleDataLabel}>Date de fin:</Text>
              <TextInput
                style={styles.salleDataInput}
                type="date"
                value={endDate}
                onChangeText={setEndDate}
              />
            </View>
            <TouchableOpacity style={styles.reserveButton} onPress={handleReserveClick}>
              <Text style={styles.reserveButtonText}>Réserver maintenant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  salleDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  salleDataLabel: {
    fontWeight: 'bold',
  },
  salleDataInput: {
    width: 200,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
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

export default SalleDetails;