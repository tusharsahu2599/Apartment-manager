const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  { 
    block: { type: String, required: true },
    flat_number: { type: Number, required: true },
    type: { type: String, required: true },
    image: {type: String},
    residents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resident"
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Flat = mongoose.model("flat", flatSchema);

module.exports = Flat;
