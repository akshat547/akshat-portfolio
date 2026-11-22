
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Save contact form message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been saved successfully!",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

module.exports = router;
