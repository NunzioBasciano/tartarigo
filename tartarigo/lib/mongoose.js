import mongoose from "mongoose";

const connection = {};

const connectionToDatabase = async () => {
  try {
    if (connection.isConnected) {
      console.log("Uso la connessione esistente");
      return;
    }
    const db = await mongoose.connect(process.env.MongoURL);
    connection.isConnected = db.connections[0].readyState;
    console.log("Nuova connessione stabilita");
  } catch (error) {
    console.error("Errore connessione DB:", error);
  }
};

export default connectionToDatabase;
