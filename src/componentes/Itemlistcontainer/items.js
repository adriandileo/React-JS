import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch
} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyACi6ag1uMNeoXydQdkd5F2oDANJ5ZLs8Y",
  authDomain: "rutajardin-74c36.firebaseapp.com",
  projectId: "rutajardin-74c36",
  storageBucket: "rutajardin-74c36.appspot.com",
  messagingSenderId: "309016876988",
  appId: "1:309016876988:web:5f48aa640c5d4936a53db9"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp)


async function getitems(){
  const collectionRef = collection(db, "items");

  let results = await getDocs(collectionRef);
  let dataItems = results.docs.map((doc) => {
    return {
      id: doc.id,
     ...doc.data(),
    };
  });

  return dataItems;
}
;
 async function getunitem(idParams){
    const docRef = doc(db, "items", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
   }

 }

 async function getCategory(CategoryParams){
  const collectionRef = collection(db, "items");

  const queryCat = query(
    collectionRef,
    where("category", "==", CategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataItems = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataItems;
}















async function sendData(){


const items = [
        {
            "id": 1,
            "name": "Drupa",
            "details": "Blend de granos provenientes de Colombia y Brasil con un tostado intermedio, con notas de chocolate y vainilla",
            "precio": 300,
            "category": "cafe",
            "stock":3,
            "min":1
          },
          {
            "id": 2,
            "name": "Fuego",
            "details": "Grano porveninente de Etipia con un tostado claro, con fuertes notas de nuez",
            "precio": 300,
            "category": "cafe",
            "stock":5,
            "min":1
          },
          {
            "id": 10,
            "name": "Focaccia",
            "details": "Pan de pizza relleno con queso, tomate y albahaca",
            "precio": 300,
            "category": "salty",
            "stock":7,
            "min":1
          },
          {
            "id": 11,
            "name": "Bagel",
            "details": "Bagel de trigo o centeno, relleno con humus de garbanzos, rucula y queso rallado",
            "precio": 300,
            "category": "salty",
            "stock":1,
            "min":1
          },
          {
            "id": 20,
            "name": "Matilda",
            "details": "Torta puramente de chocolate, con ganache de chocolate",
            "precio": 300,
            "category": "sweet",
            "stock":2,
            "min":1
          },
          {
            "id": 21,
            "name": "Selva Negra",
            "details": "Torta de chocolate con crema y frutas",
            "precio": 300,
            "category": "sweet",
            "stock":3,
            "min":1
          }
];

let itemsCollectionRef = collection(db, "items")

for(let item of items){
  delete(item.id)
  let newDoc = await addDoc(itemsCollectionRef, item);
  console.log("Documento creado:",newDoc.id)
}

};




export {getitems,
  getunitem, 
  getCategory, 
  FirebaseApp} 