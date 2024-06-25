// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgtWl97o3bP92O7Ss1g_5VT8lnORFo4-M",
    authDomain: "e-commerce-gamerx.firebaseapp.com",
    projectId: "e-commerce-gamerx",
    storageBucket: "e-commerce-gamerx.appspot.com",
    messagingSenderId: "1020323050753",
    appId: "1:1020323050753:web:c50a6c6c6fc0de43e29700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* const db = getFirestore(app);

export async function getProducts() {
    const response = await getDocs(collection(db, 'products'));
    console.log(response);
    //response es un QuerySnapShot - es iterable
    const listaProds = [];
    response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
    return listaProds;
} */