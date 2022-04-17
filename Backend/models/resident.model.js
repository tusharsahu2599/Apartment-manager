const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    flat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flat",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Resident = mongoose.model("resident", residentSchema);

module.exports = Resident;
