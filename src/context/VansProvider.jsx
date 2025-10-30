import { useEffect, useState } from "react";
import { VansContext } from "../main";

export function VansProvider({ children }) {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getVans() {
      setLoading(true);
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans);
      setLoading(false);
    }

    getVans();
  }, []);

  return (
    <VansContext.Provider value={{ vans, loading }}>
      {children}
    </VansContext.Provider>
  );
}
