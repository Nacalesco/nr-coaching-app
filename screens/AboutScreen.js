import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Button, Card, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const AboutScreen = ({ navigation }) => {

  const milestones = [
    {
      year: '2018',
      title: 'Primeros pasos',
      description: 'Comencé mi formación en desarrollo personal y superación de limitaciones sociales.'
    },
    {
      year: '2019',
      title: 'Certificación profesional',
      description: 'Obtuve mi certificación como profesor de Educación Física en el IURP.'
    },
    {
      year: '2020',
      title: 'Especialización en coaching',
      description: 'Me especialicé en coaching de mentalidad y habilidades sociales para hombres.'
    },
    {
      year: '2022',
      title: 'Lanzamiento de programa propio',
      description: 'Desarrollé una metodología única combinando desarrollo personal y seducción.'
    },
    {
      year: '2024',
      title: 'Expansión internacional',
      description: 'Ayudando a hombres de toda Latinoamérica y España a transformar sus vidas.'
    }
  ];

  const values = [
    {
      icon: 'fire',
      title: 'Autenticidad',
      description: 'Ser genuino y verdadero contigo mismo y con los demás.'
    },
    {
      icon: 'bolt',
      title: 'Acción',
      description: 'Tomar acción constante para crear los resultados que deseas.'
    },
    {
      icon: 'brain',
      title: 'Mentalidad',
      description: 'Desarrollar una mentalidad fuerte y enfocada en el crecimiento.'
    },
    {
      icon: 'users',
      title: 'Comunidad',
      description: 'Rodearte de personas que te inspiran y te impulsan a mejorar.'
    }
  ];

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Sobre Mí</Text>
          <Text style={styles.pageDescription}>
            Soy Nicolás Reartes, coach de seducción y desarrollo personal. A lo largo de mi trayectoria, 
            he ayudado a hombres a superar miedos, mejorar su confianza y lograr relaciones exitosas 
            con mujeres de manera natural y auténtica.
          </Text>
        </View>
        
        <View style={styles.section}>
          <View style={styles.aboutContentContainer}>
            {Platform.OS === 'web' && (
              <View style={styles.aboutImageContainer}>
                <View style={styles.aboutImage} />
              </View>
            )}
            
            <View style={styles.aboutTextContainer}>
              <Text style={styles.sectionTitle}>Mi Trayectoria</Text>
              <Text style={styles.aboutText}>
                Mi camino comenzó hace años cuando yo mismo me enfrentaba a los mismos desafíos que muchos
                de mis clientes tienen hoy. Después de años de formación personal, superé mis limitaciones 
                y desarrollé un sistema efectivo para ayudar a otros hombres que están en situaciones similares.
              </Text>
              <Text style={styles.aboutText}>
                Combinando mi formación en Educación Física con estudios avanzados en psicología, comunicación
                y lenguaje corporal, he creado un método único para transformar a hombres comunes en 
                versiones mejoradas de sí mismos, capaces de atraer naturalmente a las mujeres que desean.
              </Text>
              
              <Text style={styles.sectionTitle}>Mi Misión</Text>
              <Text style={styles.aboutText}>
                Mi misión es clara: ayudarte a convertirte en tu mejor versión. Creo firmemente que cada hombre
                tiene el potencial de desarrollar una increíble confianza, habilidades sociales excepcionales y
                una mentalidad ganadora que le permita atraer naturalmente a las mujeres sin trucos ni manipulación.
              </Text>
              <Text style={styles.aboutText}>
                No se trata de técnicas superficiales, sino de transformarte desde adentro hacia afuera, 
                eliminando inseguridades, miedos y patrones negativos para liberar al hombre exitoso que ya está dentro de ti.
              </Text>
              
              <View style={styles.specializationContainer}>
                <View style={styles.specializationItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={18} />
                  <Text style={styles.specializationText}>Experto en comunicación y seducción natural</Text>
                </View>
                
                <View style={styles.specializationItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={18} />
                  <Text style={styles.specializationText}>Profesor Universitario de Educación Física (IURP)</Text>
                </View>
                
                <View style={styles.specializationItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={18} />
                  <Text style={styles.specializationText}>Certificado en coaching de mentalidad y liderazgo masculino</Text>
                </View>
                
                <View style={styles.specializationItem}>
                  <Icon name="check" type="font-awesome" color="#4CAF50" size={18} />
                  <Text style={styles.specializationText}>Especialista en superación de miedos e inseguridades sociales</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        <View style={[styles.section, { backgroundColor: '#F3F4F6' }]}>
          <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>Mi Recorrido</Text>
          <Text style={[styles.sectionDescription, { textAlign: 'center', marginBottom: 40 }]}>
            Un vistazo a los momentos clave que han formado mi carrera como coach
          </Text>
          
          <View style={styles.timelineContainer}>
            {milestones.map((milestone, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.timelineYearContainer}>
                  <Text style={styles.timelineYear}>{milestone.year}</Text>
                </View>
                
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>{milestone.title}</Text>
                  <Text style={styles.timelineDescription}>{milestone.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>Mis Valores</Text>
          <Text style={[styles.sectionDescription, { textAlign: 'center', marginBottom: 40 }]}>
            Principios que guían mi trabajo y que transmito a mis clientes
          </Text>
          
          <View style={styles.valuesContainer}>
            {values.map((value, index) => (
              <Card key={index} containerStyle={styles.valueCard}>
                <Icon
                  name={value.icon}
                  type="font-awesome-5"
                  color={theme.colors.primary}
                  size={40}
                  containerStyle={styles.valueIcon}
                />
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </Card>
            ))}
          </View>
        </View>
        
        <View style={[styles.ctaSection, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.ctaTitle}>¿Listo para transformar tu vida?</Text>
          <Text style={styles.ctaDescription}>
            Da el primer paso hacia la versión mejorada de ti mismo. Reserva tu asesoría personalizada ahora.
          </Text>
          <Button
            title="Reservar Mi Asesoría"
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
    padding: 40,
    maxWidth: 1200,
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4B5563',
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    marginBottom: 20,
  },
  specializationContainer: {
    marginTop: 20,
  },
  specializationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  specializationText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#374151',
  },
  timelineContainer: {
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  timelineYearContainer: {
    width: 80,
    alignItems: 'center',
  },
  timelineYear: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  timelineContent: {
    flex: 1,
    borderLeft: '2px solid #E5E7EB',
    paddingLeft: 20,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#4B5563',
  },
  valuesContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  valueCard: {
    width: Platform.OS === 'web' ? '22%' : '100%',
    minWidth: Platform.OS === 'web' ? 220 : undefined,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  valueIcon: {
    marginBottom: 15,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
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

export default AboutScreen;