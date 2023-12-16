import {
  collection,
  doc,
  getDoc,
  getFirestore,
  writeBatch,
} from "firebase/firestore";

export const createOrder = async (order) => {
  const db = getFirestore();
  // Update stock and create order in order collection
  const batch = writeBatch(db);

  order.items.forEach((cartItem) => {
    const itemRef = doc(db, "items", cartItem.item.id);
    batch.update(itemRef, { stock: cartItem.item.stock - cartItem.quantity });
  });

  const ordersCollection = collection(db, "orders");
  const newOrderRef = await doc(ordersCollection);
  batch.set(newOrderRef, order);

  await batch.commit();

  const orderId = newOrderRef._key.path.segments[1];
  return orderId;
};

export const getOrder = async (orderId) => {
  const db = getFirestore();
  const orderRef = await doc(db, "orders", orderId);
  const orderDoc = await getDoc(orderRef);
  if (!orderDoc.exists()) {
    return null;
  }
  return { id: orderDoc.id, ...orderDoc.data() };
};
