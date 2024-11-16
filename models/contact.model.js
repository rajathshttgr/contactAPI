const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter the first name"],
        },
        lastName: {
            type: String,
            required: [true, "Please enter the last name"],
        },
        email: {
            type: String,
            required: [true, "Please enter an email address"],
            unique: true, // Ensures no duplicate email entries
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Please enter a valid email address",
            ],
        },
        phone: {
            type: String,
            required: [true, "Please enter a phone number"],
            match: [
                /^\+?[1-9]\d{1,14}$/,
                "Please enter a valid phone number",
            ],
        },
        company: {
            type: String,
            required: false,
        },
        jobTitle: {
            type: String,
            required: false,
        },
        notes: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
