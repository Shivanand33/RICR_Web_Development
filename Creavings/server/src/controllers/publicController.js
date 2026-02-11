import Contact from "../models/contactModel.js";
import Menu from "../models/menuSchema.js";
import User from "../models/userModel.js";

export const NewContact = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, message } = req.body;

    if (!fullName || !email || !mobileNumber || !message) {
      const error = new Error("All feilds required");
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
        "Thanks for Contacting us. We will Get Back to you in 24-48 Hours",
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await User.find({ role: "manager" }).select(
      "-password",
    );

    res.status(200).json({
      message: "Restaurants fetched successfully",
      data: restaurants,
    });
  } catch (error) {
    next(error);
  }
};

export const GetRetaurantMenuData = async (req, res, next) => {
  try {
    const { id, page } = req.params;
    const pageNum = parseInt(page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;

    if (!id) {
      const error = new Error("Restaurant id required");
      error.statusCode = 400;
      return next(error);
    }

    const skip = (pageNum - 1) * limit;

    const filter = { resturantID: id, availability: { $ne: "removed" } };

    const [total, restaurantMenuData] = await Promise.all([
      Menu.countDocuments(filter),
      Menu.find(filter)
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("resturantID"),
    ]);

    res.status(200).json({
      message: "Menu fetched successfully",
      data: restaurantMenuData,
      meta: { total, page: pageNum, limit },
    });
  } catch (error) {
    next(error);
  }
};