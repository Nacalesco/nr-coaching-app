import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Text, Button, useTheme } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import theme from '../theme';
const Header = () => {
  const navigation = useNavigation();

  const menuItems = [
    { name: 'Inicio', route: 'Home' },
    { name: 'Sobre Mí', route: 'About' },
    { name: 'Servicios', route: 'Services' },
    { name: 'Testimonios', route: 'Testimonials' },
    { name: 'Contacto', route: 'Contact' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <StatusBar style="light" />

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logoContainer}>
        <Text style={styles.logo}>NR</Text>
        <Text style={styles.logoText}>Nicolás Reartes</Text>
      </TouchableOpacity>

      {Platform.OS === 'web' && (
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.route)}
            >
              <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Button
        title="Reservar Asesoría"
        buttonStyle={[styles.reserveButton, { backgroundColor: theme.colors.accent }]}
        titleStyle={styles.reserveButtonText}
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 15,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  reserveButton: {
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  reserveButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Header;