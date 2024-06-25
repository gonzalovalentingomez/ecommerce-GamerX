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

export const getItems = async () => {
    const itemsCollection = await db.collection('items').get();
    return itemsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getItem = async (id) => {
    const itemDoc = await db.collection('items').doc(id).get();
    if (itemDoc.exists) {
        return { id: itemDoc.id, ...itemDoc.data() };
    } else {
        throw new Error('Item not found');
    }
};

export const createOrder = async (order) => {
    const orderRef = await db.collection('orders').add(order);
    return orderRef.id;
};

export default db;