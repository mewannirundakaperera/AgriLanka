import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/common/Header';
import OrderCard from '../../components/common/OrderCard';
import { COLORS } from '../../utils/colors';
import { sampleOrders } from '../../data/sampleData';

const FarmerOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="My Orders" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Orders</Text>
          {sampleOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order History</Text>
          <OrderCard
            order={{
              id: 3,
              crop: 'Potatoes',
              quantity: '300 kg',
              status: 'Delivered',
              buyer: 'Keells',
              total: 'Rs. 24,000',
            }}
          />
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
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.common.gray800,
    marginBottom: 12,
  },
});

export default FarmerOrdersScreen;