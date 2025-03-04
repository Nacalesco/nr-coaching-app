import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Button, Card, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const ResourcesScreen = ({ navigation }) => {
  
  
  const freeResources = [
    {
      id: 'videos',
      title: 'Videos Exclusivos',
      description: 'Técnicas avanzadas y ejercicios de entrenamiento diario.',
      icon: 'video',
      resources: [
        { title: 'Lenguaje corporal dominante', duration: '8:42' },
        { title: 'Cómo iniciar conversaciones', duration: '10:15' },
        { title: 'Desarrolla confianza auténtica', duration: '12:30' },
        { title: 'Supera el miedo al rechazo', duration: '9:55' },
      ]
    },
    {
      id: 'articles',
      title: 'Artículos y Blog',
      description: 'Consejos prácticos sobre mentalidad, atracción y relaciones.',
      icon: 'newspaper',
      resources: [
        { title: '5 errores que alejan a las mujeres', date: '15/02/2023' },
        { title: 'Cómo desarrollar presencia magnética', date: '03/04/2023' },
        { title: 'Secretos de comunicación efectiva', date: '21/05/2023' },
        { title: 'Construye una mentalidad de abundancia', date: '10/07/2023' },
      ]
    },
    {
      id: 'downloads',
      title: 'Descargas Gratis',
      description: 'PDFs con consejos y estrategias para mejorar tu vida y relaciones.',
      icon: 'file-download',
      resources: [
        { title: 'Guía rápida de estilo masculino', size: '1.2 MB' },
        { title: '10 ejercicios de confianza', size: '0.8 MB' },
        { title: 'Plantillas de conversación', size: '1.5 MB' },
        { title: 'Checklist de primera cita', size: '0.6 MB' },
      ]
    }
  ];
  
  const premiumResources = [
    {
      id: 'ebooks',
      title: 'Ebooks Completos',
      description: 'Guías detalladas para transformar tu vida amorosa y social.',
      icon: 'book',
      price: '$37 USD',
      items: [
        'El código de la atracción natural',
        'Dominando la psicología femenina',
        'Superando bloqueos emocionales',
        'El arte de la polarización masculina'
      ]
    },
    {
      id: 'courses',
      title: 'Cursos Online',
      description: 'Programas estructurados con ejercicios prácticos y seguimiento.',
      icon: 'laptop',
      price: '$97 USD',
      items: [
        'Programa de 6 semanas de transformación',
        'Masterclass de comunicación efectiva',
        'Entrenamiento avanzado de lenguaje corporal',
        'Bootcamp virtual de seducción natural'
      ]
    },
    {
      id: 'community',
      title: 'Comunidad Privada',
      description: 'Acceso a grupo exclusivo de hombres comprometidos con su mejora.',
      icon: 'users',
      price: '$47 USD/mes',
      items: [
        'Sesiones grupales semanales',
        'Análisis de casos y situaciones reales',
        'Feedback personalizado',
        'Retos mensuales con premios'
      ]
    }
  ];
  
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Recursos Gratuitos</Text>
          <Text style={styles.pageDescription}>
            Accede a contenido exclusivo para potenciar tu desarrollo personal.
            Estos recursos te ayudarán a comenzar tu transformación.
          </Text>
        </View>
        
        <View style={styles.freeResourcesSection}>
          {freeResources.map((category) => (
            <View key={category.id} style={styles.resourceCategory}>
              <View style={styles.categoryHeader}>
                <Icon
                  name={category.icon}
                  type="font-awesome-5"
                  color={theme.colors.primary}
                  size={24}
                  containerStyle={styles.categoryIcon}
                />
                <View style={styles.categoryTitleContainer}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                </View>
              </View>
              
              <View style={styles.resourceList}>
                {category.resources.map((resource, index) => (
                  <Card key={index} containerStyle={styles.resourceCard}>
                    <View style={styles.resourceCardContent}>
                      <View style={styles.resourceInfo}>
                        <Text style={styles.resourceTitle}>{resource.title}</Text>
                        <Text style={styles.resourceMeta}>
                          {resource.duration || resource.date || resource.size}
                        </Text>
                      </View>
                      
                      <Button
                        icon={
                          <Icon
                            name={category.id === 'downloads' ? 'download' : 'arrow-right'}
                            type="font-awesome-5"
                            color="#FFFFFF"
                            size={14}
                          />
                        }
                        buttonStyle={[styles.resourceButton, { backgroundColor: theme.colors.primary }]}
                        onPress={() => {}}
                      />
                    </View>
                  </Card>
                ))}
              </View>
              
              <Button
                title={`Ver todos los ${category.title.toLowerCase()}`}
                type="outline"
                buttonStyle={styles.viewAllButton}
                titleStyle={{ color: theme.colors.primary }}
                onPress={() => {}}
              />
            </View>
          ))}
        </View>
        
        <View style={styles.premiumResourcesSection}>
          <Text style={styles.premiumTitle}>Recursos Premium</Text>
          <Text style={styles.premiumDescription}>
            Material avanzado para acelerar tu progreso y obtener resultados extraordinarios.
          </Text>
          
          <View style={styles.premiumContainer}>
            {premiumResources.map((resource) => (
              <Card key={resource.id} containerStyle={styles.premiumCard}>
                <View style={styles.premiumIconContainer}>
                  <Icon
                    name={resource.icon}
                    type="font-awesome-5"
                    color={theme.colors.accent}
                    size={40}
                    containerStyle={styles.premiumIcon}
                  />
                </View>
                
                <Text style={styles.premiumResourceTitle}>{resource.title}</Text>
                <Text style={styles.premiumResourceDescription}>{resource.description}</Text>
                
                <View style={styles.premiumItemsList}>
                  {resource.items.map((item, index) => (
                    <View key={index} style={styles.premiumItem}>
                      <Icon
                        name="check"
                        type="font-awesome-5"
                        color="#4CAF50"
                        size={16}
                        containerStyle={styles.checkIcon}
                      />
                      <Text style={styles.premiumItemText}>{item}</Text>
                    </View>
                  ))}
                </View>
                
                <Text style={styles.premiumPrice}>{resource.price}</Text>
                
                <Button
                  title="Más Información"
                  buttonStyle={[styles.premiumButton, { backgroundColor: theme.colors.primary }]}
                  onPress={() => navigation.navigate('Services')}
                />
              </Card>
            ))}
          </View>
        </View>
        
        <View style={[styles.ctaSection, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.ctaTitle}>¿Listo para el siguiente nivel?</Text>
          <Text style={styles.ctaDescription}>
            Los recursos gratuitos son un excelente punto de partida, pero para un cambio 
            profundo y duradero, la asesoría personalizada es la solución más efectiva.
          </Text>
          <Button
            title="Reserva tu asesoría personal"
            buttonStyle={[styles.ctaButton, { backgroundColor: theme.colors.accent }]}
            onPress={() => navigation.navigate('Contact')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  headerSection: {
    padding: 40,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pageDescription: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    maxWidth: 800,
  },
  freeResourcesSection: {
    padding: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  resourceCategory: {
    marginBottom: 50,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIcon: {
    marginRight: 15,
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 10,
  },
  categoryTitleContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryDescription: {
    fontSize: 16,
    color: '#6B7280',
  },
  resourceList: {
    marginBottom: 20,
  },
  resourceCard: {
    marginBottom: 10,
    borderRadius: 8,
    padding: 15,
  },
  resourceCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resourceMeta: {
    fontSize: 14,
    color: '#6B7280',
  },
  resourceButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 0,
  },
  viewAllButton: {
    borderColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 5,
  },
  premiumResourcesSection: {
    padding: 40,
    backgroundColor: '#F3F4F6',
  },
  premiumTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  premiumDescription: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  premiumContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  premiumCard: {
    width: Platform.OS === 'web' ? '30%' : '100%',
    minWidth: Platform.OS === 'web' ? 300 : undefined,
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
  },
  premiumIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  premiumIcon: {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    padding: 15,
    borderRadius: 40,
  },
  premiumResourceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  premiumResourceDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  premiumItemsList: {
    marginBottom: 20,
  },
  premiumItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  checkIcon: {
    marginRight: 10,
  },
  premiumItemText: {
    fontSize: 14,
    color: '#4B5563',
    flex: 1,
  },
  premiumPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1F2937',
  },
  premiumButton: {
    paddingVertical: 12,
    borderRadius: 5,
  },
  ctaSection: {
    padding: 60,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 600,
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
});

export default ResourcesScreen;