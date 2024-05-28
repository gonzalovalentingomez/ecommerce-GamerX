// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDocs, getFirestore} from "firebase/firestore";

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


const dataBase = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db,'products'));
    //responce es un QuerySnapShot - es iterable
    const listaProds=[];
    response .forEach((docu) => listaProds.push({id: docu.id, ...docu.data()}))
    return listaProds;
}

//Filtrando productos segun el precio
export async function filterProdsByPrice(maxPrice){
    const q = query(collection(db,'products'),where('price','<',maxPrice));
    const response = await getDocs(q);
    const listaFiltro = [];
    response.forEach()
}