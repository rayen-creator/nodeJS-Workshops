const mongoose = require("mongoose");

contractSchema = mongoose.Schema({
  FullName: String,
  Phone: String,
});

const Contact = mongoose.model("Contacts", contractSchema);
module.exports = Contact;
