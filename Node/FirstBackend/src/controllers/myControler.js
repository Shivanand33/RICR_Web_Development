import User from "../models/userModel.js";
export const Userregister = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);
    res.status(201).json({ message: "User Created Seccessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    const existinguser = await User.find({ email });
    if (!existinguser) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }

    // const isVerified = password === existinguser.password;
    if (!password === existingUser.password) {
      res.status(402).json({ message: "User Not Aithorized" });
      return;
    }

    console.log(existinguser);
    res.status(200).json({ message: "Welcome back", data: existinguser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout Seccessfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
