import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";
 
 

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;

  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [activeTab, setActiveTab] = useState("order");

  const fetchRestaurantMenu = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant-menu/${restaurantId}/1`);
      setRestaurantData(res.data.data || []);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (restaurantId) fetchRestaurantMenu();
  }, [restaurantId]);

  const restaurantInfo = useMemo(() => {
    if (!restaurantData || restaurantData.length === 0) return null;
    return restaurantData[0].resturantID || null;
  }, [restaurantData]);

  const parsePrice = (p) => {
    if (!p) return 0;
    const num = parseFloat(String(p).replace(/[^0-9.]/g, ""));
    return Number.isNaN(num) ? 0 : num;
  };

  const cartItems = useMemo(() => Object.values(cart), [cart]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((s, it) => s + parsePrice(it.price) * it.qty, 0);
  }, [cartItems]);

  const addToCart = (menuItem) => {
    setCart((c) => {
      const existing = c[menuItem._id];
      const qty = existing ? existing.qty + 1 : 1;
      return { ...c, [menuItem._id]: { ...menuItem, qty } };
    });
    toast.success("Added to cart");
  };

  const changeQty = (itemId, delta) => {
    setCart((c) => {
      const existing = c[itemId];
      if (!existing) return c;
      const qty = existing.qty + delta;

      if (qty <= 0) {
        const next = { ...c };
        delete next[itemId];
        return next;
      }
      return { ...c, [itemId]: { ...existing, qty } };
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return toast.error("Cart is empty");

    const summary = cartItems
      .map((it) => `${it.itemName} x${it.qty} = ₹${parsePrice(it.price) * it.qty}`)
      .join("\n");

    toast.success(`Order ready!\n${summary}\nTotal: ₹${cartTotal}`);
    console.log("Order payload:", {
      restaurantId,
      items: cartItems,
      total: cartTotal,
    });
  };

  const galleryImages = useMemo(() => {
    let imgs = [];

    if (restaurantInfo?.photo?.url) imgs.push(restaurantInfo.photo.url);

    restaurantData.forEach((menu) => {
      if (menu.images && menu.images.length > 0) {
        menu.images.forEach((img) => {
          if (img.url) imgs.push(img.url);
        });
      }
    });

    return imgs.slice(0, 5); // max 5 images
  }, [restaurantInfo, restaurantData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading restaurant...
          </div>
        ) : (
          <>
            {/* Restaurant Header */}
            {restaurantInfo && (
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {restaurantInfo.restaurantName}
                </h1>

                <p className="text-gray-600 mt-1">
                  {(restaurantInfo.cuisine || "")
                    .split(",")
                    .slice(0, 4)
                    .join(", ")}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {restaurantInfo.address || restaurantInfo.city}
                </p>

                <div className="flex items-center gap-4 mt-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                    4.4 ★
                  </div>

                  <div className="text-sm text-gray-600">
                    4,304 Ratings
                  </div>

                  <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                    Direction
                  </button>

                  <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                    Share
                  </button>
                </div>
              </div>
            )}

            {/* Zomato Gallery Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {/* Left big image */}
              <div className="md:col-span-2 h-[320px] rounded-xl overflow-hidden">
                <img
                  src={
                    galleryImages[0] ||
                    "https://via.placeholder.com/800x400?text=Restaurant+Image"
                  }
                  alt="restaurant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right 3 images */}
              <div className="grid grid-rows-2 gap-3 h-[320px]">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={
                      galleryImages[1] ||
                      "https://via.placeholder.com/400x200?text=Food"
                    }
                    alt="food"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={
                        galleryImages[2] ||
                        "https://via.placeholder.com/300x200?text=Snack"
                      }
                      alt="snack"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={
                        galleryImages[3] ||
                        "https://via.placeholder.com/300x200?text=Gallery"
                      }
                      alt="gallery"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="text-white font-semibold px-4 py-2 bg-black/50 rounded-lg">
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs like Zomato */}
            <div className="border-b flex gap-8 text-gray-600 font-medium mb-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-3 ${
                  activeTab === "overview"
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
              >
                Overview
              </button>

              <button
                onClick={() => setActiveTab("order")}
                className={`pb-3 ${
                  activeTab === "order"
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
              >
                Order Online
              </button>

              <button
                onClick={() => setActiveTab("photos")}
                className={`pb-3 ${
                  activeTab === "photos"
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
              >
                Photos
              </button>

              <button
                onClick={() => setActiveTab("menu")}
                className={`pb-3 ${
                  activeTab === "menu"
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
              >
                Menu
              </button>
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Menu Section */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Order Online
                </h3>

                <div className="space-y-4">
                  {restaurantData && restaurantData.length > 0 ? (
                    restaurantData.map((menu) => (
                      <div
                        key={menu._id}
                        className="bg-white p-4 rounded-xl shadow-sm flex gap-4"
                      >
                        {/* Image */}
                        <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                          {menu.images && menu.images.length > 0 ? (
                            <img
                              src={menu.images[0].url}
                              alt={menu.itemName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                              No image
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">
                                {menu.itemName}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {menu.description}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {menu.type} • {menu.servingSize}
                              </p>
                            </div>

                            <div className="text-right">
                              <div className="font-bold text-gray-900">
                                ₹{parsePrice(menu.price).toFixed(2)}
                              </div>
                            </div>
                          </div>

                          {/* Add Button */}
                          <div className="mt-4 flex items-center gap-3">
                            {!cart[menu._id] ? (
                              <button
                                onClick={() => addToCart(menu)}
                                className="px-5 py-2 rounded-lg border border-green-600 text-green-600 font-semibold hover:bg-green-50"
                              >
                                Add
                              </button>
                            ) : (
                              <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                                <button
                                  onClick={() => changeQty(menu._id, -1)}
                                  className="font-bold text-lg text-gray-700"
                                >
                                  -
                                </button>
                                <span className="font-semibold">
                                  {cart[menu._id].qty}
                                </span>
                                <button
                                  onClick={() => changeQty(menu._id, +1)}
                                  className="font-bold text-lg text-gray-700"
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">No menu items found.</div>
                  )}
                </div>
              </div>
             
              {/* Cart Section */}
              <aside className="bg-white rounded-xl shadow-sm p-5 h-fit sticky top-6">
                <h4 className="font-bold text-lg text-gray-900">Cart</h4>

                <div className="mt-4">
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                      Your cart is empty
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {cartItems.map((it) => (
                        <div
                          key={it._id}
                          className="flex justify-between items-start"
                        >
                          <div>
                            <div className="font-semibold text-gray-800">
                              {it.itemName}
                            </div>
                            <div className="text-xs text-gray-500">
                              ₹{parsePrice(it.price).toFixed(2)} × {it.qty}
                            </div>
                          </div>

                          <div className="font-semibold text-gray-900">
                            ₹{(parsePrice(it.price) * it.qty).toFixed(2)}
                          </div>
                        </div>
                      ))}

                      <div className="border-t pt-3 flex justify-between font-bold text-gray-900">
                        <span>Total</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full py-3 mt-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold"
                      >
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDisplayMenu;
