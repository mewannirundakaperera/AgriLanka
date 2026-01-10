import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

// Crops API
export const cropsAPI = {
  // Add new crop
  addCrop: async (cropData) => {
    try {
      const docRef = await addDoc(collection(db, 'crops'), {
        ...cropData,
        createdAt: new Date().toISOString(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding crop:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all crops
  getAllCrops: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'crops'));
      const crops = [];
      querySnapshot.forEach((doc) => {
        crops.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: crops };
    } catch (error) {
      console.error('Error fetching crops:', error);
      return { success: false, error: error.message };
    }
  },

  // Get crops by farmer
  getCropsByFarmer: async (farmerId) => {
    try {
      const q = query(collection(db, 'crops'), where('farmerId', '==', farmerId));
      const querySnapshot = await getDocs(q);
      const crops = [];
      querySnapshot.forEach((doc) => {
        crops.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: crops };
    } catch (error) {
      console.error('Error fetching farmer crops:', error);
      return { success: false, error: error.message };
    }
  },

  // Update crop
  updateCrop: async (cropId, updates) => {
    try {
      const cropRef = doc(db, 'crops', cropId);
      await updateDoc(cropRef, updates);
      return { success: true };
    } catch (error) {
      console.error('Error updating crop:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete crop
  deleteCrop: async (cropId) => {
    try {
      await deleteDoc(doc(db, 'crops', cropId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting crop:', error);
      return { success: false, error: error.message };
    }
  },
};

// Orders API
export const ordersAPI = {
  // Create new order
  createOrder: async (orderData) => {
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        ...orderData,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error creating order:', error);
      return { success: false, error: error.message };
    }
  },

  // Get orders by farmer
  getOrdersByFarmer: async (farmerId) => {
    try {
      const q = query(collection(db, 'orders'), where('farmerId', '==', farmerId));
      const querySnapshot = await getDocs(q);
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: orders };
    } catch (error) {
      console.error('Error fetching farmer orders:', error);
      return { success: false, error: error.message };
    }
  },

  // Get orders by supermarket
  getOrdersBySupermarket: async (supermarketId) => {
    try {
      const q = query(collection(db, 'orders'), where('supermarketId', '==', supermarketId));
      const querySnapshot = await getDocs(q);
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: orders };
    } catch (error) {
      console.error('Error fetching supermarket orders:', error);
      return { success: false, error: error.message };
    }
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status });
      return { success: true };
    } catch (error) {
      console.error('Error updating order:', error);
      return { success: false, error: error.message };
    }
  },
};s