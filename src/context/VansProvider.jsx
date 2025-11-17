import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { VansContext } from "../main";

export function VansProvider({ children }) {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const vansCollection = collection(db, "vans");

    async function getVans() {
      setLoading(true);
      setError(null);

      try {
        // Firebase functions to get data from Firebase
        const snapshot = await getDocs(vansCollection);
        const vans = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVans(vans || []);
      } catch (error) {
        setError(error.message);
        setVans([]);
      } finally {
        setLoading(false);
      }
    }
    getVans();
  }, []);

  return (
    <VansContext.Provider value={{ vans, loading, error }}>
      {children}
    </VansContext.Provider>
  );
}
