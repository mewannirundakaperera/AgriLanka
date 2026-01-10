import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/common/Header';
import OrderCard from '../../components/common/OrderCard';
import { COLORS } from '../../utils/colors';
import { sampleOrders } from '../../data/sampleData';

const SupermarketOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="My Orders" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Orders</Text>
          {sampleOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
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

export default SupermarketOrdersScreen;