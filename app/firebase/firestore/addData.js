import {firebase_app} from "../config";
import { getFirestore, collection, doc, setDoc, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(collectionName, id, data) {
  let result = null;
  let error = null;

  try {
    if (id) {
      result = await setDoc(doc(db, collectionName, id), data, { merge: true });
    } else {
      const docRef = await addDoc(collection(db, collectionName), data);
      result = { id: docRef.id };
    }
  } catch (e) {
    console.error("Error adding document:", e);
    error = e;
  }

  return { result, error };
}
