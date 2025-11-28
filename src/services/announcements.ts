import { ANNOUNCEMENTS } from "@/constants/fb_constants";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function fetchAnnouncements() {
  const colRef = collection(db, ANNOUNCEMENTS.COLLECTION);
  const snap = await getDocs(colRef);

  // Firestore collection → list of announcement objects
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}
