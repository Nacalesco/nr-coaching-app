import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import theme from './theme';

// Import screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import TestimonialsScreen from './screens/TestimonialsScreen';
import ContactScreen from './screens/ContactScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'NR - Nicolás Reartes' }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Sobre Mí' }} 
        />
        <Stack.Screen 
          name="Services" 
          component={ServicesScreen} 
          options={{ title: 'Servicios' }} 
        />
        <Stack.Screen 
          name="Testimonials" 
          component={TestimonialsScreen} 
          options={{ title: 'Testimonios' }} 
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contacto' }} 
        />
        <Stack.Screen 
          name="Resources" 
          component={ResourcesScreen} 
          options={{ title: 'Recursos Gratuitos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}