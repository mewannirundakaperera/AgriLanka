import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../utils/constants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const savedUserType = await AsyncStorage.getItem(STORAGE_KEYS.USER_TYPE);
      const savedUserData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      
      if (savedUserType) {
        setUserType(savedUserType);
      }
      if (savedUserData) {
        setUserData(JSON.parse(savedUserData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (type, data) => {
    try {
      setUserType(type);
      setUserData(data);
      await AsyncStorage.setItem(STORAGE_KEYS.USER_TYPE, type);
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const logout = async () => {
    try {
      setUserType(null);
      setUserData(null);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_TYPE);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userType,
        userData,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};