import Contact from "../models/contactModel.js";
export const newContact = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, message } = req.body;

    if (!fullName || !email || !mobileNumber || !message) {
      const error = new Error("Email already register");
      error.statusCode = 400;
      return next(error);
    }
    const newContact = await Contact.create({
      fullName,
      email,
      mobileNumber,
      message,
    });
    console.log(newContact);
    res.status(201).json({
      message:
        "Thanks for Contating us. We Will Get Back to you in 24-48 Hours",
    });
  } catch (error) {
    next(error);
  }
};
