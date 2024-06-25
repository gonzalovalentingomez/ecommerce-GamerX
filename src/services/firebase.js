import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgtWl97o3bP92O7Ss1g_5VT8lnORFo4-M",
    authDomain: "e-commerce-gamerx.firebaseapp.com",
    projectId: "e-commerce-gamerx",
    storageBucket: "e-commerce-gamerx.appspot.com",
    messagingSenderId: "1020323050753",
    appId: "1:1020323050753:web:c50a6c6c6fc0de43e29700"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getProducts = async () => {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (productId) => {
    const docRef = db.collection('products').doc(productId);
    const doc = await docRef.get();
    if (doc.exists) {
        return { id: doc.id, ...doc.data() };
    } else {
        console.log('No such document!');
        return null;
    }
};

export const createOrder = async (order) => {
    try {
        const docRef = await db.collection('orders').add(order);
        return docRef.id;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export default firebase;