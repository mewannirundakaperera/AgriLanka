import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { USER_TYPES } from '../../utils/constants';
import { COLORS } from '../../utils/colors';

const LoginScreen = () => {
  const { login } = useAuth();

  const handleLogin = (type) => {
    const userData = {
      name: type === USER_TYPES.FARMER ? 'Silva Farms' : 
            type === USER_TYPES.SUPERMARKET ? 'Keells Super' : 'Admin User',
      location: type === USER_TYPES.FARMER ? 'Nuwara Eliya' : 'Colombo',
    };
    login(type, userData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={48} color="#fff" />
          </View>
          <Text style={styles.title}>AgriLanka</Text>
          <Text style={styles.subtitle}>Connecting Farmers & Supermarkets</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.farmer.primary }]}
            onPress={() => handleLogin(USER_TYPES.FARMER)}
          >
            <Ionicons name="people" size={24} color="#fff" />
            <Text style={styles.buttonText}>Login as Farmer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.supermarket.primary }]}
            onPress={() => handleLogin(USER_TYPES.SUPERMARKET)}
          >
            <Ionicons name="storefront" size={24} color="#fff" />
            <Text style={styles.buttonText}>Login as Supermarket</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.admin.primary }]}
            onPress={() => handleLogin(USER_TYPES.ADMIN)}
          >
            <Ionicons name="shield-checkmark" size={24} color="#fff" />
            <Text style={styles.buttonText}>Login as Admin</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Fair Trade • Transparent Pricing • Direct Connection
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcfce7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.farmer.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.common.gray600,
  },
  buttonsContainer: {
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: COLORS.common.gray500,
    fontSize: 12,
    marginTop: 32,
  },
});

export default LoginScreen;