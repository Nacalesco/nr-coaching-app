import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Text, Button, Input, useTheme, Icon } from 'react-native-elements';
import Header from '../components/Header';
import theme from '../theme';
const ContactScreen = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    
    if (!form.name.trim()) {
      formErrors.name = 'El nombre es requerido';
      isValid = false;
    }
    
    if (!form.email.trim()) {
      formErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'Email inválido';
      isValid = false;
    }
    
    if (!form.message.trim()) {
      formErrors.message = 'El mensaje es requerido';
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      // Here would go the form submission logic (API call, etc.)
      setSubmitted(true);
      // Reset form after submission
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
      });
    }
  };
  
  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
    
    // Clear error when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };
  
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Contacto</Text>
          <Text style={styles.pageDescription}>
            ¿Listo para mejorar tu vida y tus relaciones? Escríbeme ahora.
          </Text>
        </View>
        
        <View style={styles.contactSection}>
          <View style={styles.contactContainer}>
            <View style={styles.contactInfoContainer}>
              <Text style={styles.contactInfoTitle}>Información de Contacto</Text>
              <Text style={styles.contactInfoDescription}>
                Completa el formulario o contáctame directamente a través de los siguientes medios:
              </Text>
              
              <View style={styles.contactMethodContainer}>
                <Icon
                  name="envelope"
                  type="font-awesome"
                  color="#FFFFFF"
                  size={20}
                  containerStyle={styles.contactMethodIcon}
                />
                <Text style={styles.contactMethodText}>contacto@nicolasreartes.com</Text>
              </View>
              
              <View style={styles.contactMethodContainer}>
                <Icon
                  name="whatsapp"
                  type="font-awesome"
                  color="#FFFFFF"
                  size={20}
                  containerStyle={styles.contactMethodIcon}
                />
                <Text style={styles.contactMethodText}>WhatsApp: +XX XXX XXX XXXX</Text>
              </View>
              
              <Text style={styles.socialTitle}>Sígueme en redes sociales:</Text>
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIconCircle}>
                  <Icon name="instagram" type="font-awesome" color="#FFFFFF" size={18} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialIconCircle}>
                  <Icon name="youtube" type="font-awesome" color="#FFFFFF" size={18} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialIconCircle}>
                  <Icon name="twitter" type="font-awesome" color="#FFFFFF" size={18} />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.contactFormContainer}>
              {submitted ? (
                <View style={styles.successMessageContainer}>
                  <Icon
                    name="check-circle"
                    type="font-awesome"
                    color="#4CAF50"
                    size={60}
                    containerStyle={styles.successIcon}
                  />
                  <Text style={styles.successTitle}>¡Mensaje Enviado!</Text>
                  <Text style={styles.successMessage}>
                    Gracias por contactarme. Te responderé lo más pronto posible.
                  </Text>
                  <Button
                    title="Enviar otro mensaje"
                    type="outline"
                    buttonStyle={styles.newMessageButton}
                    onPress={() => setSubmitted(false)}
                  />
                </View>
              ) : (
                <View style={styles.formContainer}>
                  <Text style={styles.formTitle}>Envíame un mensaje</Text>
                  
                  <View style={styles.formRow}>
                    <View style={styles.formField}>
                      <Input
                        placeholder="Nombre"
                        value={form.name}
                        onChangeText={(text) => handleChange('name', text)}
                        errorMessage={errors.name}
                        leftIcon={
                          <Icon name="user" type="font-awesome" size={18} color="#9CA3AF" />
                        }
                        inputContainerStyle={styles.inputContainer}
                        labelStyle={styles.inputLabel}
                      />
                    </View>
                    
                    <View style={styles.formField}>
                      <Input
                        placeholder="Email"
                        value={form.email}
                        onChangeText={(text) => handleChange('email', text)}
                        errorMessage={errors.email}
                        leftIcon={
                          <Icon name="envelope" type="font-awesome" size={16} color="#9CA3AF" />
                        }
                        inputContainerStyle={styles.inputContainer}
                        labelStyle={styles.inputLabel}
                        keyboardType="email-address"
                      />
                    </View>
                  </View>
                  
                  <View style={styles.formRow}>
                    <View style={styles.formField}>
                      <Input
                        placeholder="Teléfono (opcional)"
                        value={form.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                        leftIcon={
                          <Icon name="phone" type="font-awesome" size={18} color="#9CA3AF" />
                        }
                        inputContainerStyle={styles.inputContainer}
                        labelStyle={styles.inputLabel}
                        keyboardType="phone-pad"
                      />
                    </View>
                    
                    <View style={styles.formField}>
                      <Input
                        placeholder="Asunto"
                        value={form.subject}
                        onChangeText={(text) => handleChange('subject', text)}
                        leftIcon={
                          <Icon name="tag" type="font-awesome" size={16} color="#9CA3AF" />
                        }
                        inputContainerStyle={styles.inputContainer}
                        labelStyle={styles.inputLabel}
                      />
                    </View>
                  </View>
                  
                  <Input
                    placeholder="Mensaje"
                    value={form.message}
                    onChangeText={(text) => handleChange('message', text)}
                    errorMessage={errors.message}
                    leftIcon={
                      <Icon name="comment" type="font-awesome" size={18} color="#9CA3AF" />
                    }
                    inputContainerStyle={styles.inputContainer}
                    labelStyle={styles.inputLabel}
                    multiline
                    numberOfLines={5}
                    textAlignVertical="top"
                    inputStyle={styles.textArea}
                  />
                  
                  <Button
                    title="Enviar Mensaje"
                    buttonStyle={[styles.submitButton, { backgroundColor: theme.colors.accent }]}
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
        
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Preguntas Frecuentes</Text>
          
          <View style={styles.faqContainer}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>¿Cómo funcionan las asesorías personalizadas?</Text>
              <Text style={styles.faqAnswer}>
                Las asesorías se realizan por videollamada o presencialmente, dependiendo de tu ubicación. 
                En la primera sesión analizamos tu situación actual, establecemos objetivos claros y 
                diseñamos un plan de acción personalizado.
              </Text>
            </View>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>¿Cuánto tiempo toma ver resultados?</Text>
              <Text style={styles.faqAnswer}>
                Los primeros resultados son visibles desde las primeras semanas, con mejoras en tu 
                confianza y habilidades sociales básicas. La transformación completa depende de tu 
                compromiso y constancia, pero generalmente se consolida en 2-3 meses.
              </Text>
            </View>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>¿Trabajas con personas de cualquier país?</Text>
              <Text style={styles.faqAnswer}>
                Sí, trabajo con clientes de toda Latinoamérica y España. Las sesiones online tienen la 
                misma efectividad que las presenciales, y el seguimiento por WhatsApp garantiza que 
                estés siempre apoyado.
              </Text>
            </View>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>¿Ofrecen garantía de resultados?</Text>
              <Text style={styles.faqAnswer}>
                Sí, todos mis programas incluyen garantía de satisfacción. Si después del primer mes 
                no estás satisfecho con los resultados y has seguido el plan al 100%, te devuelvo el dinero.
              </Text>
            </View>
          </View>
        </View>
        
        <View style={[styles.ctaSection, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.ctaTitle}>Empieza tu transformación ahora</Text>
          <Text style={styles.ctaDescription}>
            No esperes más para convertirte en el hombre que siempre has querido ser.
          </Text>
          <Button
            title="Reservar Asesoría"
            buttonStyle={[styles.ctaButton, { backgroundColor: theme.colors.accent }]}
            onPress={() => {}}
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
  contactSection: {
    paddingHorizontal: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  contactContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  contactInfoContainer: {
    flex: Platform.OS === 'web' ? 0.4 : undefined,
    backgroundColor: '#1F2937',
    padding: 30,
  },
  contactInfoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  contactInfoDescription: {
    fontSize: 16,
    color: '#D1D5DB',
    marginBottom: 30,
  },
  contactMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactMethodIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    borderRadius: 20,
    marginRight: 15,
  },
  contactMethodText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 15,
  },
  socialIconsContainer: {
    flexDirection: 'row',
  },
  socialIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  contactFormContainer: {
    flex: Platform.OS === 'web' ? 0.6 : undefined,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  formContainer: {},
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
  },
  formRow: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
  },
  formField: {
    flex: Platform.OS === 'web' ? 1 : undefined,
    paddingHorizontal: Platform.OS === 'web' ? 5 : 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: '#4B5563',
  },
  textArea: {
    minHeight: 100,
    paddingTop: 10,
  },
  submitButton: {
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  successMessageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successIcon: {
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  newMessageButton: {
    borderColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  faqSection: {
    padding: 40,
    backgroundColor: '#F3F4F6',
    marginTop: 60,
  },
  faqTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  faqContainer: {
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  faqItem: {
    marginBottom: 30,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
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

export default ContactScreen;