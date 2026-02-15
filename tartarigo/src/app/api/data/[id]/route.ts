import { NextResponse } from "next/server";
import Data from "../../../(models)/data";
import connectionToDatabase from "../../../../../lib/mongoose";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Tipizziamo params come Promise
) {
  try {
    await connectionToDatabase();

    // 1. Aspettiamo che la Promise dei params si risolva
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // 2. Cerchiamo il documento
    const singleData = await Data.findById(id);

    if (!singleData) {
      return NextResponse.json(
        { error: "Elemento non trovato" },
        { status: 404 },
      );
    }

    return NextResponse.json(singleData, { status: 200 });
  } catch (error: any) {
    console.error("Errore GET ID:", error);
    return NextResponse.json(
      { error: "ID non valido o errore server" },
      { status: 500 },
    );
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // 1. Connessione al database
    await connectionToDatabase();

    // 2. Risoluzione dei parametri asincroni (Next.js 15+)
    const { id } = await params;

    // 3. Tentativo di eliminazione
    const deletedItem = await Data.findByIdAndDelete(id);

    // 4. Se l'ID non esiste nel DB
    if (!deletedItem) {
      return NextResponse.json(
        { error: "Impossibile eliminare: elemento non trovato" },
        { status: 404 },
      );
    }

    // 5. Successo
    return NextResponse.json(
      { message: "Documento eliminato con successo!", id: id },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Errore nella DELETE:", error);
    return NextResponse.json(
      { error: "Errore durante l'eliminazione", details: error.message },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectionToDatabase();
    const { id } = await params;

    // Prendiamo il nuovo contenuto dal corpo della richiesta
    const body = await request.json();
    const { newContent } = body;

    if (!newContent) {
      return NextResponse.json(
        { error: "Contenuto mancante" },
        { status: 400 },
      );
    }

    // Aggiorniamo il documento
    const updatedItem = await Data.findByIdAndUpdate(
      id,
      { content: newContent },
      { new: true }, // Opzione per restituire il documento dopo la modifica
    );

    if (!updatedItem) {
      return NextResponse.json(
        { error: "Elemento non trovato" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Aggiornato!", item: updatedItem },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Errore durante l'update" },
      { status: 500 },
    );
  }
}
