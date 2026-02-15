import { NextResponse } from "next/server";

import Data from "../../(models)/data";
import connectionToDatabase from "../../../../lib/mongoose";

// ... import precedenti

export async function POST(request: any) {
  try {
    await connectionToDatabase();
    const body = await request.json();

    // Noti qui? Entriamo dentro formData per prendere data
    const contentToSend = body.formData?.data;

    if (!contentToSend) {
      return NextResponse.json(
        { error: "Campo 'data' mancante" },
        { status: 400 },
      );
    }

    const newData = new Data({
      content: contentToSend, // Ora 'pippo' finirà qui dentro
    });

    await newData.save();
    return NextResponse.json(
      { message: "Salvato!", item: newData },
      { status: 201 },
    );
  } catch (error) {
    // ... catch precedente
  }
}

export async function GET() {
  try {
    await connectionToDatabase();

    // Recupera tutti i documenti dalla collezione Data, ordinati dal più recente
    const allData = await Data.find({}).sort({ createdAt: -1 });

    return NextResponse.json(allData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Errore nel recupero dati" },
      { status: 500 },
    );
  }
}
