import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/common/Header';
import StatCard from '../../components/common/StatCard';
import CropCard from '../../components/common/CropCard';
import { COLORS } from '../../utils/colors';
import { sampleCrops } from '../../data/sampleData';

const SupermarketHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Supermarket Dashboard" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.statsContainer}
        >
          <StatCard
            icon="cart-outline"
            label="Active Orders"
            value="12"
            color={COLORS.supermarket.primary}
          />
          <StatCard
            icon="people-outline"
            label="Partner Farmers"
            value="25"
            color={COLORS.admin.primary}
          />
          <StatCard
            icon="trending-up-outline"
            label="Cost Savings"
            value="18%"
            color={COLORS.farmer.primary}
          />
        </ScrollView>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available Crops</Text>
          </View>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color={COLORS.common.gray400} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search crops..."
              placeholderTextColor={COLORS.common.gray400}
            />
          </View>

          {sampleCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} showFarmer={true} />
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
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.common.gray300,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});

export default SupermarketHomeScreen;