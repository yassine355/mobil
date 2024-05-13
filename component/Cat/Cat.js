import React, { createContext, useState } from 'react';

// Dummy images, replace with actual paths or imports
import pro from './Images/eve-pro.jpg';
import scol from './Images/eve-scol.webp';
import perso from './Images/eve-perso.webp';

export const SalleContext = createContext();

const SalleProvider = ({ children }) => {
  const [selectedSalle, setSelectedSalle] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const categorie_list = [
    {
      _id: "1",
      name: "ÉVENEMENT PROFESSIONNEL",
      image: pro,
      price: 200,
      description: "Occasions for businesses to network and promote.",
      category: "salle",
    },
    {
      _id: "2",
      name: "ÉVENEMENT SCOLAIRE",
      image: scol,
      price: 200,
      description: "Events organized by schools for engagement.",
      category: "salle",
    },
    {
      _id: "3",
      name: "ÉVENEMENT PERSONNEL",
      image: perso,
      price: 200,
      description: "Celebrations for individuals and families.",
      category: "salle",
    },
  ];

  return (
    <SalleContext.Provider value={{ categorie_list, selectedSalle, setSelectedSalle, cart, addToCart }}>
      {children}
    </SalleContext.Provider>
  );
};

export default SalleProvider;