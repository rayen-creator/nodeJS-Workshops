const Contact = require("../models/contact");

exports.getAllContacts = (req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    if (!contacts) {
      res.status(404).json({
        message: "No contacts found !",
      });
    } else {
      res.status(200).json({
        contacts,
      });
    }
  });
};

exports.addContact = (req, res) => {
  const contact = new Contact({
    FullName: req.body.FullName,
    Phone: req.body.Phone,
  });
  contact.save((err, contact) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(201).json({
        contact: contact,
      });
    }
  });
};
exports.findContactById = (req, res) => {
  const id = req.params.id;
  Contact.findById(id, (err, contact) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }

    if (!contact) {
      res.status(404).json({
        message: "No contact found !",
      });
    } else {
      res.status(200).json({
        contact,
      });
    }
  });
};

exports.UpdateContact = (req, res) => {
    
  const id = req.params.id;
  const contact = {
    FullName: req.body.FullName,
    Phone: req.body.Phone,
  };

  Contact.findByIdAndUpdate(id,contact,{ new: true },(err, updatedContact) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Updated !",
          contact: updatedContact,
        });
      }
    }
  );
};

exports.DeleteContact = (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndRemove(id, (err, contact) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Deleted !",
        contact: contact,
      });
    }
  });
};
