"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function PageGet() {
  // State to manage form input data
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const response = await axios.get("/api/data");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.log("Errore nel caricamento", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="mt-10">
      <h3>Dati salvati nel DB:</h3>
      <ul>
        {items.map((item: any) => (
          <li key={item._id} className="border-b py-2">
            {item.content} -{" "}
            <small>{new Date(item.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
