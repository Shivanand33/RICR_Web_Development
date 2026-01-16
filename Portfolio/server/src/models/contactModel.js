import mongoose from "mongoose";
import Contact from "../../../client/src/pages/Contact";

const contactSchema = new mongoose.Schema(
  {
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
