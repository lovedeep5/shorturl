import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import uuid from "react-uuid";

const saveToFirebase = async (originalURL, shortenString) => {
  const newRecord = doc(collection(db, "shortenURL"));
  await setDoc(newRecord, {
    id: uuid(),
    url: originalURL,
    timeStamp: serverTimestamp(),
    shortString: shortenString,
  });
};
export default saveToFirebase;
