"use client";

import axios from "axios";
import { useEffect, useState, use } from "react";

interface DataItem {
  _id: string;
  content: string;
  createdAt: string;
}

export default function PageGet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const dataId = resolvedParams.id;

  const [item, setItem] = useState<DataItem | null>(null);
  const [loading, setLoading] = useState(true);

  // STATO PER IL FORM DI MODIFICA
  const [editValue, setEditValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const getSingleItem = async (id: string) => {
    try {
      const response = await axios.get(`/api/data/${id}`);
      setItem(response.data);
      setEditValue(response.data.content); // Pre-compila il form di modifica
    } catch (error) {
      console.error("Errore nel recupero del dato:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (itemId: string) => {
    if (!confirm("Sei sicuro di voler eliminare questo dato?")) return;
    try {
      await axios.delete(`/api/data/${itemId}`);
      alert("Eliminato!");
      window.location.href = "/test"; // Torna alla lista
    } catch (error) {
      console.error("Errore eliminazione:", error);
    }
  };

  // FUNZIONE PER IL TEST DELLA PATCH
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/data/${dataId}`, {
        newContent: editValue,
      });
      setItem(response.data.item); // Aggiorna la UI col nuovo dato
      setIsEditing(false); // Chiude il form di modifica
      alert("Dato aggiornato con successo!");
    } catch (error) {
      console.error("Errore update:", error);
    }
  };

  useEffect(() => {
    if (dataId) getSingleItem(dataId);
  }, [dataId]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (!item) return <p>Nessun dato trovato per l'ID: {dataId}</p>;

  return (
    <div className="p-10 border rounded-lg shadow-sm max-w-md mx-auto mt-10 space-y-6">
      <h3 className="text-xl font-bold">Dettaglio Documento</h3>

      {!isEditing ? (
        <div className="bg-gray-50 p-4 rounded border">
          <p>
            <strong>Contenuto:</strong> {item.content}
          </p>
          <p className="text-sm text-gray-400 mt-2">ID: {item._id}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded text-sm mr-2"
          >
            Modifica Testo
          </button>
        </div>
      ) : (
        <form onSubmit={handleUpdate} className="bg-blue-50 p-4 rounded border">
          <label className="block mb-2 font-bold text-sm text-black">
            Modifica Contenuto:
          </label>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full p-2 border rounded text-black mb-3"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded text-sm"
            >
              Salva
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded text-sm"
            >
              Annulla
            </button>
          </div>
        </form>
      )}

      <div className="flex justify-between items-center pt-4 border-t">
        <button
          onClick={() => window.history.back()}
          className="text-blue-500 underline text-sm"
        >
          ← Torna indietro
        </button>
        <button
          onClick={() => handleDelete(dataId)}
          className="text-red-500 underline text-sm"
        >
          Elimina definitivamente
        </button>
      </div>
    </div>
  );
}
