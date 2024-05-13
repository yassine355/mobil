import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './component/navbar/Navbar';
import Header from './component/Header/Header';
import Apropos from './component/Apropos/Apropos';
import SalleProvider from './component/Cat/Cat';
import CategorieDisplay from './component/CategorieDisplay/CategorieDisplay';

export default function App() {
  return (
    <NavigationContainer>
      <SalleProvider>
        <ScrollView>
          <Navbar />
          <Header />
          <Apropos />
          <CategorieDisplay />
        </ScrollView>
      </SalleProvider>
    </NavigationContainer>
  );
}