import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Questa riga evita di ricreare il modello se esiste già
export default mongoose.models.Data || mongoose.model("Data", DataSchema);
