import * as admin from "firebase-admin";

admin.initializeApp();

const getCollection = async (collectionName: string) => {
  return await admin.firestore().collection(collectionName).get();
};

const addToCollection = async (collectionName: string, data: any) => {
  return await admin.firestore().collection(collectionName).add(data);
};

export { getCollection, addToCollection };
