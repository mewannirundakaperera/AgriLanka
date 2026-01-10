import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/common/Header';
import StatCard from '../../components/common/StatCard';
import CropCard from '../../components/common/CropCard';
import { COLORS } from '../../utils/colors';
import { sampleCrops } from '../../data/sampleData';

const FarmerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Farmer Dashboard" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.statsContainer}
        >
          <StatCard
            icon="cube-outline"
            label="Active Listings"
            value="8"
            color={COLORS.farmer.primary}
          />
          <StatCard
            icon="cart-outline"
            label="Pending Orders"
            value="3"
            color={COLORS.supermarket.primary}
          />
          <StatCard
            icon="cash-outline"
            label="This Month"
            value="Rs. 45K"
            color="#f59e0b"
          />
        </ScrollView>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Crop Listings</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={20} color="#fff" />
              <Text style={styles.addButtonText}>Add Crop</Text>
            </TouchableOpacity>
          </View>

          {sampleCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} showFarmer={false} />
          ))}
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
  statsContainer: {
    paddingVertical: 16,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.farmer.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default FarmerHomeScreen;