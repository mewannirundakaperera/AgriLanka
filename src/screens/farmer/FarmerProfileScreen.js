import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/common/Header';
import { COLORS } from '../../utils/colors';
import { useAuth } from '../../context/AuthContext';

const FarmerProfileScreen = () => {
  const { userData } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={48} color="#fff" />
          </View>
          <Text style={styles.profileName}>{userData?.name || 'Silva Farms'}</Text>
          <Text style={styles.profileLocation}>{userData?.location || 'Nuwara Eliya District'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Farm Name</Text>
            <TextInput
              style={styles.input}
              value="Silva Farms"
              placeholder="Enter farm name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value="Nuwara Eliya"
              placeholder="Enter location"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              style={styles.input}
              value="+94 77 123 4567"
              placeholder="Enter contact number"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value="silva@agrilanka.lk"
              placeholder="Enter email"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.common.gray50,
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.farmer.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 14,
    color: COLORS.common.gray600,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.common.gray600,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLORS.common.gray300,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: COLORS.farmer.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FarmerProfileScreen;