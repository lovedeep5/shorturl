import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const getSingleRow = async (col, value) => {
  let requestedData;
  const q = query(collection(db, "shortenURL"), where(col, "==", value));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    requestedData = doc.data();
  });
  return requestedData;
};
export default getSingleRow;
