const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

managerSchema.pre("save", function (next) {
  
  if (!this.isModified("password")) return next();
  
  bcrypt.hash(this.password, 2, (err, hash) => {
    this.password = hash;
    return next();
  });
});

managerSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);

      return resolve(same);
    });
  });
};

const Manager = mongoose.model("manager", managerSchema);

module.exports = Manager;
