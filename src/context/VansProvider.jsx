import { useEffect, useState } from "react";
import { VansContext } from "../main";

export function VansProvider({ children }) {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <VansContext.Provider value={{ vans }}>{children}</VansContext.Provider>
  );
}
