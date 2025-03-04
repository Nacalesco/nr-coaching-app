import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Button, Card, Badge, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const ServicesScreen = ({ navigation }) => {
  

  const personalSessionPlans = [
    {
      id: 'plan-joven',
      title: 'Plan Joven Promesa',
      price: '$127',
      popular: false,
      features: [
        '4 semanas de acompañamiento personalizado',
        '4 sesiones personalizadas (Zoom o presencial)',
        'Análisis inicial detallado',
        'Estrategias de seducción básicas',
        'Corrección de lenguaje corporal & estilo',
        'Plan diario personalizado',
        'Seguimiento exclusivo por WhatsApp',
      ],
    },
    {
      id: 'plan-primera',
      title: 'Plan Primera División',
      price: '$400',
      popular: true,
      features: [
        '8 semanas de acompañamiento personalizado',
        '8 sesiones personalizadas (Zoom o presencial)',
        'Análisis detallado inicial completo',
        'Estrategias de seducción avanzadas',
        'Análisis de interacciones sociales',
        'Plan de entrenamiento personalizado',
        'Simulaciones y ejercicios prácticos',
        'Seguimiento exclusivo por WhatsApp',
      ],
    },
    {
      id: 'plan-elite',
      title: 'Plan Élite',
      price: '$1000',
      popular: false,
      features: [
        '16 semanas de acompañamiento personalizado',
        '16 sesiones personalizadas (Zoom o presencial)',
        'Análisis completo y seguimiento detallado',
        'Estrategias personalizadas semanales',
        'Corrección avanzada de estilo, comunicación y carisma',
        'Bootcamp intensivo de 2 días',
        'Preparación mental para la seducción',
        'Acceso a recursos exclusivos',
        'Apoyo 24/7 y seguimiento personalizado',
      ],
    },
  ];

  const otherServices = [
    {
      id: 'workshops',
      icon: 'chalkboard-teacher',
      title: 'Talleres y Eventos',
      description: 'Workshops presenciales y online sobre seducción, liderazgo y desarrollo personal.',
      price: 'Desde $37 USD',
    },
    {
      id: 'ebooks',
      icon: 'book',
      title: 'Ebooks y Cursos',
      description: 'Material digital exclusivo para aprender a tu ritmo con ejercicios prácticos.',
      price: 'Desde $47 USD',
    },
    {
      id: 'plans',
      icon: 'file-pdf',
      title: 'Planes de Entrenamiento en PDF',
      description: 'Guías detalladas para mejorar tu lenguaje corporal, comunicación y presencia.',
      price: 'Desde $37 USD',
    },
    {
      id: 'complete-guide',
      icon: 'clipboard-list',
      title: 'Guía Completa de Entrenamiento',
      description: 'Plan de 12 semanas para mejorar tu confianza, habilidades sociales y atracción.',
      price: '$47 USD',
    },
  ];

  const renderFeatureItem = (feature, index) => (
    <View key={index} style={styles.featureItem}>
      <Icon name="check" type="font-awesome" color="#4CAF50" size={16} />
      <Text style={styles.featureText}>{feature}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Servicios</Text>
          <Text style={styles.pageDescription}>
            Programas diseñados específicamente para hombres que buscan mejorar su confianza, 
            seducción y mentalidad con un enfoque práctico y efectivo.
          </Text>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon
              name="user-friends"
              type="font-awesome-5"
              color={theme.colors.primary}
              size={24}
              containerStyle={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Asesorías Personalizadas</Text>
          </View>
          <Text style={styles.sectionDescription}>
            Sesiones 1 a 1 donde analizamos tu caso y te doy un plan de acción personalizado.
          </Text>
          
          <View style={styles.plansContainer}>
            {personalSessionPlans.map((plan) => (
              <Card key={plan.id} containerStyle={styles.planCard}>
                {plan.popular && (
                  <Badge
                    value="Popular"
                    badgeStyle={{ backgroundColor: theme.colors.accent }}
                    containerStyle={styles.badgeContainer}
                  />
                )}
                
                <Text style={styles.planTitle}>{plan.title}</Text>
                <Text style={styles.planPrice}>{plan.price} <Text style={styles.planPriceNote}>USD</Text></Text>
                
                <View style={styles.featuresList}>
                  {plan.features.map((feature, index) => renderFeatureItem(feature, index))}
                </View>
                
                <Button
                  title="Reservar Ahora"
                  buttonStyle={[styles.planButton, { backgroundColor: plan.popular ? theme.colors.accent : theme.colors.primary }]}
                  onPress={() => navigation.navigate('Contact')}
                />
              </Card>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon
              name="cubes"
              type="font-awesome"
              color={theme.colors.primary}
              size={24}
              containerStyle={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Otros Servicios</Text>
          </View>
          
          <View style={styles.otherServicesContainer}>
            {otherServices.map((service) => (
              <Card key={service.id} containerStyle={styles.serviceCard}>
                <View style={styles.serviceHeader}>
                  <Icon
                    name={service.icon}
                    type="font-awesome-5"
                    color={theme.colors.primary}
                    size={24}
                    containerStyle={styles.serviceIcon}
                  />
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </View>
                
                <Text style={styles.serviceDescription}>{service.description}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
                
                <Button
                  title="Ver Detalles"
                  type="outline"
                  buttonStyle={styles.serviceButton}
                  titleStyle={{ color: theme.colors.primary }}
                  onPress={() => {}}
                />
              </Card>
            ))}
          </View>
        </View>
        
        <View style={styles.resourcesSection}>
          <Text style={styles.resourcesTitle}>Recursos Gratuitos</Text>
          <Text style={styles.resourcesDescription}>
            Accede a contenido exclusivo para potenciar tu desarrollo personal.
          </Text>
          
          <View style={styles.resourcesContainer}>
            <Card containerStyle={styles.resourceCard}>
              <Icon
                name="video"
                type="font-awesome-5"
                color={theme.colors.primary}
                size={30}
                containerStyle={styles.resourceIcon}
              />
              <Text style={styles.resourceCardTitle}>Videos Exclusivos</Text>
              <Text style={styles.resourceCardDescription}>
                Técnicas avanzadas y ejercicios de entrenamiento diario (menos de 10 min).
              </Text>
              <Button
                title="Ver Todos"
                type="clear"
                titleStyle={{ color: theme.colors.primary }}
                onPress={() => navigation.navigate('Resources')}
              />
            </Card>
            
            <Card containerStyle={styles.resourceCard}>
              <Icon
                name="newspaper"
                type="font-awesome-5"
                color={theme.colors.primary}
                size={30}
                containerStyle={styles.resourceIcon}
              />
              <Text style={styles.resourceCardTitle}>Artículos y Blog</Text>
              <Text style={styles.resourceCardDescription}>
                Consejos prácticos sobre mentalidad, atracción y relaciones.
              </Text>
              <Button
                title="Leer Más"
                type="clear"
                titleStyle={{ color: theme.colors.primary }}
                onPress={() => navigation.navigate('Resources')}
              />
            </Card>
            
            <Card containerStyle={styles.resourceCard}>
              <Icon
                name="file-download"
                type="font-awesome-5"
                color={theme.colors.primary}
                size={30}
                containerStyle={styles.resourceIcon}
              />
              <Text style={styles.resourceCardTitle}>Descargas Gratis</Text>
              <Text style={styles.resourceCardDescription}>
                PDFs con consejos y estrategias para mejorar tu vida y relaciones.
              </Text>
              <Button
                title="Descargar"
                type="clear"
                titleStyle={{ color: theme.colors.primary }}
                onPress={() => navigation.navigate('Resources')}
              />
            </Card>
          </View>
        </View>
        
        <View style={[styles.ctaSection, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.ctaTitle}>¿Estás listo para empezar?</Text>
          <Text style={styles.ctaDescription}>
            No esperes más para transformar tu vida. Da el primer paso y reserva tu asesoría ahora.
          </Text>
          <Button
            title="Reservar tu asesoría ahora"
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
  section: {
    padding: 20,
    paddingTop: 40,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 30,
  },
  plansContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  planCard: {
    width: Platform.OS === 'web' ? '30%' : '100%',
    minWidth: Platform.OS === 'web' ? 300 : undefined,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planPriceNote: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#6B7280',
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#4B5563',
  },
  planButton: {
    paddingVertical: 12,
  },
  otherServicesContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: Platform.OS === 'web' ? '48%' : '100%',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceIcon: {
    marginRight: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 10,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  serviceButton: {
    borderColor: '#3B82F6',
  },
  resourcesSection: {
    padding: 40,
    backgroundColor: '#F3F4F6',
  },
  resourcesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  resourcesDescription: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  resourcesContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-around',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  resourceCard: {
    width: Platform.OS === 'web' ? '30%' : '100%',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  resourceIcon: {
    marginBottom: 15,
  },
  resourceCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  resourceCardDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 15,
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

export default ServicesScreen;