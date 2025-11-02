import { useEffect, useState } from "react";
import { VansContext } from "../main";

export function VansProvider({ children }) {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVans() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/vans");
        if (!res.ok) {
          throw new Error(
            `Something went wrong on the server. \n` +
              `Error status text: ${res.statusText}.\n` +
              `Error status: ${res.status}`
          );
        }
        const data = await res.json();
        setVans(data.vans || []);
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
