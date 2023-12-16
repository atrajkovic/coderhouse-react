import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const getItems = async () => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const itemsSnapshot = await getDocs(itemsCollection);
  const itemsList = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return itemsList;
};

export const getItemById = async (id) => {
  const db = getFirestore();
  const itemRef = await doc(db, "items", id);
  const itemSnapshot = await getDoc(itemRef);
  if (!itemSnapshot.exists()) return null;
  return { id: itemSnapshot.id, ...itemSnapshot.data() };
};

export const getCategories = () => {
  return [
    { id: 1, name: "Colombia" },
    { id: 2, name: "Brasil" },
    { id: 3, name: "Costa Rica" },
  ];
};
