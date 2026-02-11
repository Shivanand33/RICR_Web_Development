import React, { useEffect, useMemo, useState } from "react";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;

  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

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
    // controller populates resturantID, use first entry
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
    // For now, just show summary — integrate with order API when available
    const summary = cartItems
      .map((it) => `${it.itemName} x${it.qty} = ${parsePrice(it.price) * it.qty}`)
      .join("\n");
    toast.success(`Order prepared:\n${summary}\nTotal: ${cartTotal}`);
    console.log("Order payload:", { restaurantId, items: cartItems, total: cartTotal });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="text-center py-20">Loading menu...</div>
        ) : (
          <>
            {restaurantInfo && (
              <div className="bg-white rounded p-4 flex gap-4 items-center">
                <div className="w-28 h-28 bg-gray-100 rounded overflow-hidden">
                  {restaurantInfo.photo && restaurantInfo.photo.url ? (
                    <img src={restaurantInfo.photo.url} alt="restaurant" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">No image</div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{restaurantInfo.restaurantName}</h2>
                  <div className="text-sm text-gray-600">{restaurantInfo.address || restaurantInfo.city}</div>
                  <div className="text-sm text-gray-500 mt-1">{(restaurantInfo.cuisine || "").split(",").slice(0,3).join(", ")}</div>
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-3">Menu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {restaurantData && restaurantData.length > 0 ? (
                    restaurantData.map((menu) => (
                      <div key={menu._id} className="bg-white rounded p-3 flex gap-3">
                        <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          {menu.images && menu.images.length > 0 ? (
                            <img src={menu.images[0].url} alt={menu.itemName} className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-500">No image</div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold">{menu.itemName}</div>
                              <div className="text-sm text-gray-600">{menu.description}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">₹{parsePrice(menu.price).toFixed(2)}</div>
                              <div className="text-xs text-gray-500">{menu.servingSize}</div>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center gap-2">
                            <button onClick={() => addToCart(menu)} className="py-1 px-3 bg-emerald-500 text-white rounded">Add</button>
                            {cart[menu._id] && (
                              <div className="flex items-center gap-2">
                                <button onClick={() => changeQty(menu._id, -1)} className="px-2 bg-gray-200 rounded">-</button>
                                <div>{cart[menu._id].qty}</div>
                                <button onClick={() => changeQty(menu._id, +1)} className="px-2 bg-gray-200 rounded">+</button>
                              </div>
                            )}
                            <div className="ml-auto text-sm text-gray-500">{menu.type}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No menu items found.</div>
                  )}
                </div>
              </div>

              <aside className="bg-white rounded p-4">
                <h4 className="font-semibold">Cart</h4>
                <div className="mt-3">
                  {cartItems.length === 0 ? (
                    <div className="text-sm text-gray-500">Cart is empty</div>
                  ) : (
                    <div className="space-y-2">
                      {cartItems.map((it) => (
                        <div key={it._id} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{it.itemName}</div>
                            <div className="text-xs text-gray-500">₹{parsePrice(it.price).toFixed(2)} x {it.qty}</div>
                          </div>
                          <div className="text-right">₹{(parsePrice(it.price) * it.qty).toFixed(2)}</div>
                        </div>
                      ))}
                      <div className="border-t pt-2 flex justify-between font-semibold">Total <span>₹{cartTotal.toFixed(2)}</span></div>
                      <div className="pt-3">
                        <button onClick={handleCheckout} className="w-full py-2 bg-blue-600 text-white rounded">Checkout</button>
                      </div>
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
