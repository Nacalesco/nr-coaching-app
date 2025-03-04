import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Button, Card, Avatar, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const TestimonialsScreen = ({ navigation }) => {
  
  
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Carlos M.',
      location: 'Buenos Aires, Argentina',
      age: 28,
      content: 'Después de años de inseguridad, el programa de Nicolás me dio las herramientas para transformar completamente mi vida social. Ahora tengo la confianza para acercarme a cualquier mujer que me interese. Los resultados superaron todas mis expectativas.',
      rating: 5,
      program: 'Plan Élite'
    },
    {
      id: 2,
      name: 'Alejandro R.',
      location: 'Bogotá, Colombia',
      age: 31,
      content: 'Llegué con muchas dudas, pero desde la primera sesión supe que había tomado la decisión correcta. Nicolás tiene un enfoque práctico y directo que te saca de tu zona de confort pero te da resultados reales. En dos meses logré superar bloqueos que tenía desde la adolescencia.',
      rating: 5,
      program: 'Plan Primera División'
    },
    {
      id: 3,
      name: 'Miguel L.',
      location: 'Madrid, España',
      age: 26,
      content: 'Lo que más valoro es que no se trata de técnicas artificiales, sino de desarrollar una verdadera confianza interior. Nicolás me ayudó a identificar mis fortalezas y a comunicarme de manera auténtica. El cambio ha sido notable en todas las áreas de mi vida.',
      rating: 5,
      program: 'Plan Joven Promesa'
    },
    {
      id: 4,
      name: 'David S.',
      location: 'Santiago, Chile',
      age: 35,
      content: 'Como profesional exitoso pero con una vida personal vacía, el coaching de Nicolás fue exactamente lo que necesitaba. Su método me ayudó a equilibrar mi vida y a desarrollar relaciones genuinas. Ahora tengo novia después de 4 años soltero.',
      rating: 5,
      program: 'Plan Primera División'
    },
    {
      id: 5,
      name: 'Roberto P.',
      location: 'Ciudad de México, México',
      age: 29,
      content: 'Increíble lo rápido que empecé a ver cambios. Las técnicas son sencillas pero efectivas. Lo recomiendo 100% a cualquier hombre que quiera mejorar su confianza y atractivo social.',
      rating: 4,
      program: 'Plan Joven Promesa'
    },
    {
      id: 6,
      name: 'Fernando T.',
      location: 'Lima, Perú',
      age: 33,
      content: 'La inversión en este programa ha sido de las mejores de mi vida. No solo mejoré con las mujeres, sino que gané confianza en el trabajo y en todas mis relaciones sociales. Nicolás realmente sabe lo que hace.',
      rating: 5,
      program: 'Plan Élite'
    },
  ];
  
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          type="font-awesome"
          color={i < rating ? '#F59E0B' : '#D1D5DB'}
          size={16}
          containerStyle={styles.starIcon}
        />
      );
    }
    return <View style={styles.ratingContainer}>{stars}</View>;
  };
  
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Testimonios</Text>
          <Text style={styles.pageDescription}>
            Historias reales de hombres que han transformado su vida con mi metodología.
            Estos son algunos de los resultados que mis clientes han conseguido.
          </Text>
        </View>
        
        <View style={styles.testimonialsSection}>
          <View style={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} containerStyle={styles.testimonialCard}>
                <View style={styles.testimonialHeader}>
                  <View style={styles.avatarContainer}>
                    <Avatar
                      rounded
                      title={testimonial.name.charAt(0)}
                      containerStyle={{ backgroundColor: theme.colors.primary }}
                      size={50}
                    />
                  </View>
                  
                  <View style={styles.testimonialHeaderInfo}>
                    <Text style={styles.testimonialName}>{testimonial.name}</Text>
                    <Text style={styles.testimonialMeta}>{testimonial.location} | {testimonial.age} años</Text>
                    {renderRating(testimonial.rating)}
                  </View>
                </View>
                
                <Text style={styles.testimonialContent}>"{testimonial.content}"</Text>
                
                <View style={styles.testimonialFooter}>
                  <Text style={styles.programLabel}>Programa:</Text>
                  <Text style={styles.programName}>{testimonial.program}</Text>
                </View>
              </Card>
            ))}
          </View>
        </View>
        
        <View style={styles.statsSection}>
          <Text style={styles.statsSectionTitle}>Resultados Comprobados</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>92%</Text>
              <Text style={styles.statDescription}>de clientes mejoran su confianza en las primeras 4 semanas</Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>85%</Text>
              <Text style={styles.statDescription}>aumentan significativamente sus interacciones sociales exitosas</Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>78%</Text>
              <Text style={styles.statDescription}>consiguen relaciones de calidad dentro de los 6 meses</Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>96%</Text>
              <Text style={styles.statDescription}>recomiendan el programa a amigos y conocidos</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.videoSection}>
          <Text style={styles.videoSectionTitle}>Historias en Video</Text>
          <Text style={styles.videoSectionDescription}>
            Escucha directamente de mis clientes cómo el programa transformó sus vidas.
          </Text>
          
          <View style={styles.videoPlaceholder}>
            <Icon
              name="play-circle"
              type="font-awesome"
              color="#FFFFFF"
              size={60}
            />
            <Text style={styles.videoPlaceholderText}>Testimonios en Video</Text>
          </View>
        </View>
        
        <View style={[styles.ctaSection, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.ctaTitle}>Escribe tu propia historia de éxito</Text>
          <Text style={styles.ctaDescription}>
            Cientos de hombres ya han transformado sus vidas. Es tu turno de pasar a la acción.
          </Text>
          <Button
            title="Reserva tu asesoría ahora"
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
  testimonialsSection: {
    paddingHorizontal: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  testimonialsGrid: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  testimonialCard: {
    width: Platform.OS === 'web' ? '30%' : '100%',
    minWidth: Platform.OS === 'web' ? 300 : undefined,
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
  },
  testimonialHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatarContainer: {
    marginRight: 15,
  },
  testimonialHeaderInfo: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  testimonialMeta: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    marginRight: 3,
  },
  testimonialContent: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    fontStyle: 'italic',
    marginBottom: 15,
  },
  testimonialFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 15,
  },
  programLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  programName: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsSection: {
    padding: 40,
    backgroundColor: '#F3F4F6',
    marginTop: 20,
  },
  statsSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  statsContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  statItem: {
    width: Platform.OS === 'web' ? '22%' : '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 10,
  },
  statDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
  },
  videoSection: {
    padding: 40,
    alignItems: 'center',
  },
  videoSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  videoSectionDescription: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 800,
  },
  videoPlaceholder: {
    width: Platform.OS === 'web' ? 560 : '100%',
    height: 315,
    backgroundColor: '#1F2937',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlaceholderText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
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

export default TestimonialsScreen;