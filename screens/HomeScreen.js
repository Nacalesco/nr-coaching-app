import React from 'react';
import { View, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { Text, Button, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={[styles.heroSection, { backgroundColor: theme.colors.primary }]}>
          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroCategory}>Coaching y Desarrollo Personal</Text>
              <Text style={styles.heroTitle}>Potencia tu rendimiento en el desarrollo personal</Text>
              <Text style={styles.heroDescription}>
                Transforma tu vida con una metodología personalmente diseñada
                para hombres que quieren mejorar su confianza y crecimiento personal.
              </Text>
              
              <View style={styles.keyPointsContainer}>
                <View style={styles.keyPoint}>
                  <Icon name="check-circle" type="font-awesome" color="#4CAF50" size={20} />
                  <Text style={styles.keyPointText}>
                    Aplica estrategias probadas en comunicación, lenguaje corporal y atracción
                  </Text>
                </View>
                
                <View style={styles.keyPoint}>
                  <Icon name="check-circle" type="font-awesome" color="#4CAF50" size={20} />
                  <Text style={styles.keyPointText}>
                    Trabaja en tu mentalidad y autoestima para ser un hombre de alto valor
                  </Text>
                </View>
                
                <View style={styles.keyPoint}>
                  <Icon name="check-circle" type="font-awesome" color="#4CAF50" size={20} />
                  <Text style={styles.keyPointText}>
                    Aprende cómo conocer mujeres naturalmente, sin depender de la suerte
                  </Text>
                </View>
              </View>
              
              <View style={styles.benefitsContainer}>
                <View style={styles.benefitItem}>
                  <Text style={styles.benefitTitle}>Resultados garantizados</Text>
                  <Text style={styles.benefitDesc}>con un enfoque práctico y realista</Text>
                </View>
                
                <View style={styles.benefitItem}>
                  <Text style={styles.benefitTitle}>Acceso a estrategias</Text>
                  <Text style={styles.benefitDesc}>utilizadas por los mejores</Text>
                </View>
                
                <View style={styles.benefitItem}>
                  <Text style={styles.benefitTitle}>Correcciones personalizadas</Text>
                  <Text style={styles.benefitDesc}>para maximizar tu progreso</Text>
                </View>
              </View>
              
              <Button
                title="Ver Servicios"
                buttonStyle={[styles.heroButton, { backgroundColor: theme.colors.accent }]}
                onPress={() => navigation.navigate('Services')}
              />
            </View>
            
            {Platform.OS === 'web' && (
              <View style={styles.heroImageContainer}>
                <View style={styles.circleImage} />
              </View>
            )}
          </View>
        </View>
        
        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
          <Text style={styles.sectionDescription}>
            Soy Nicolás Reartes, coach de seducción y desarrollo personal. 
            A lo largo de mi trayectoria, he ayudado a hombres a superar miedos, 
            mejorar su confianza y lograr relaciones exitosas con mujeres de manera natural y auténtica.
          </Text>
          
          <View style={styles.aboutContentContainer}>
            {Platform.OS === 'web' && (
              <View style={styles.aboutImageContainer}>
                <View style={styles.aboutImage} />
              </View>
            )}
            
            <View style={styles.aboutTextContainer}>
              <Text style={styles.aboutSectionTitle}>Mi Trayectoria</Text>
              <Text style={styles.aboutText}>
                Después de años de formación, pude superar mis limitaciones de forma clara, enfrentando
                mis propios miedos internos y ahora ayudo a otros hombres que están en
                situaciones similares a las que yo estuve.
              </Text>
              
              <Text style={styles.aboutSectionTitle}>Mi Misión</Text>
              <Text style={styles.aboutText}>
                Mi misión es que te conviertas en tu mejor versión, dejándote de excusas 
                y pasando a la acción con herramientas efectivas para alcanzar los resultados 
                que realmente deseas en tu vida.
              </Text>
              
              <View style={styles.expertiseContainer}>
                <View style={styles.expertiseItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={16} />
                  <Text style={styles.expertiseText}>Experto en comunicación y seducción natural</Text>
                </View>
                
                <View style={styles.expertiseItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={16} />
                  <Text style={styles.expertiseText}>Profesor Universitario de Educación Física (IURP)</Text>
                </View>
                
                <View style={styles.expertiseItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={16} />
                  <Text style={styles.expertiseText}>Coach con enfoque en mentalidad y liderazgo masculino</Text>
                </View>
              </View>
              
              <Button
                title="Ver mis servicios"
                buttonStyle={styles.aboutButton}
                onPress={() => navigation.navigate('Services')}
              />
            </View>
          </View>
        </View>
        
        {/* Final CTA Section */}
        <View style={[styles.ctaSection, { backgroundColor: '#111827' }]}>
          <Text style={styles.ctaTitle}>¡Empieza tu transformación ahora!</Text>
          <Text style={styles.ctaDescription}>
            No dejes que dudas, miedos, o excusas te sigan limitando. El éxito está a solo una decisión de distancia.
            Reserva ahora y da el primer paso hacia la vida que siempre has deseado.
          </Text>
          
          <View style={styles.ctaButtonsContainer}>
            <Button
              title="Más Información"
              type="outline"
              buttonStyle={styles.ctaSecondaryButton}
              titleStyle={{ color: '#FFFFFF' }}
              onPress={() => navigation.navigate('About')}
            />
            
            <Button
              title="Reservar Ahora"
              buttonStyle={[styles.ctaPrimaryButton, { backgroundColor: theme.colors.accent }]}
              onPress={() => navigation.navigate('Contact')}
            />
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerColumns}>
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Nicolás Reartes</Text>
              <Text style={styles.footerText}>
                Coach especializado en desarrollo personal y superación de patrones de vida limitantes.
              </Text>
            </View>
            
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Enlaces Rápidos</Text>
              <TouchableText onPress={() => navigation.navigate('Home')}>Inicio</TouchableText>
              <TouchableText onPress={() => navigation.navigate('About')}>Sobre Mí</TouchableText>
              <TouchableText onPress={() => navigation.navigate('Services')}>Servicios</TouchableText>
              <TouchableText onPress={() => navigation.navigate('Testimonials')}>Testimonios</TouchableText>
            </View>
            
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Servicios</Text>
              <TouchableText onPress={() => navigation.navigate('Services')}>Asesorías</TouchableText>
              <TouchableText onPress={() => navigation.navigate('Services')}>Planes y Programas</TouchableText>
              <TouchableText onPress={() => navigation.navigate('Resources')}>Recursos Gratuitos</TouchableText>
            </View>
            
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Contacto</Text>
              <Text style={styles.footerText}>contacto@nicolasreartes.com</Text>
              <Text style={styles.footerText}>WhatsApp: +XX XXX XXX XXXX</Text>
              <View style={styles.socialIcons}>
                <Icon name="instagram" type="font-awesome" color="#FFFFFF" size={20} containerStyle={styles.socialIcon} />
                <Icon name="youtube" type="font-awesome" color="#FFFFFF" size={20} containerStyle={styles.socialIcon} />
                <Icon name="twitter" type="font-awesome" color="#FFFFFF" size={20} containerStyle={styles.socialIcon} />
              </View>
            </View>
          </View>
          
          <Text style={styles.copyright}>© 2025 Nicolás Reartes. Todos los derechos reservados.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const TouchableText = ({ children, onPress, style }) => {
  return (
    <Text onPress={onPress} style={[styles.footerLink, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  scrollView: {
    flex: 1,
     // Agrega estas propiedades para web
     ...(Platform.OS === 'web' ? {
        overflowY: 'auto',
        height: '100%',
        width: '100%',
      } : {}),
  },
  heroSection: {
    padding: 20,
    paddingVertical: 60,
  },
  heroContent: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  heroTextContainer: {
    flex: Platform.OS === 'web' ? 0.55 : 1,
    paddingRight: Platform.OS === 'web' ? 30 : 0,
  },
  heroCategory: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heroDescription: {
    color: '#D1D5DB',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  keyPointsContainer: {
    marginBottom: 30,
  },
  keyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  keyPointText: {
    color: '#D1D5DB',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  benefitsContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  benefitItem: {
    marginBottom: 15,
    flex: Platform.OS === 'web' ? 1 : undefined,
    marginRight: Platform.OS === 'web' ? 10 : 0,
  },
  benefitTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  benefitDesc: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  heroButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  heroImageContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#F3F4F6',
  },
  section: {
    padding: 40,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  aboutContentContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    alignItems: 'center',
  },
  aboutImageContainer: {
    flex: Platform.OS === 'web' ? 0.4 : undefined,
    marginRight: Platform.OS === 'web' ? 40 : 0,
    marginBottom: Platform.OS === 'web' ? 0 : 30,
  },
  aboutImage: {
    width: 320,
    height: 400,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
  },
  aboutTextContainer: {
    flex: Platform.OS === 'web' ? 0.6 : 1,
  },
  aboutSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    marginBottom: 25,
  },
  expertiseContainer: {
    marginBottom: 30,
  },
  expertiseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  expertiseText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#374151',
  },
  aboutButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ctaSection: {
    padding: 60,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 800,
  },
  ctaButtonsContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'center',
  },
  ctaSecondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    marginRight: Platform.OS === 'web' ? 15 : 0,
    marginBottom: Platform.OS === 'web' ? 0 : 15,
    minWidth: 150,
  },
  ctaPrimaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    minWidth: 150,
  },
  footer: {
    backgroundColor: '#1F2937',
    padding: 40,
  },
  footerColumns: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    maxWidth: 1200,
    marginHorizontal: 'auto',
    marginBottom: 40,
  },
  footerColumn: {
    flex: Platform.OS === 'web' ? 1 : undefined,
    marginBottom: Platform.OS === 'web' ? 0 : 30,
    marginRight: Platform.OS === 'web' ? 20 : 0,
  },
  footerColumnTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footerText: {
    color: '#D1D5DB',
    fontSize: 14,
    marginBottom: 10,
  },
  footerLink: {
    color: '#D1D5DB',
    fontSize: 14,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    marginRight: 15,
    backgroundColor: '#374151',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
  },
  copyright: {
    color: '#9CA3AF',
    fontSize: 14,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
});

export default HomeScreen;