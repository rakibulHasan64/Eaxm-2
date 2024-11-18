/* eslint-disable react/prop-types */
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import MenuItems from "./MenuItems";
import { useEffect, useState, useContext } from "react";
// import { bookContext } from "./bookcontext";
import { bookContext } from "./bookcondext";

function Menue({ model, setModel }) {


  const { cartItem, setCartItem } = useContext(bookContext);








  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleDelete = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };



  const handleQuantityChange = (id, newQuantity) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };



  const subtotal = cartItem.reduce((total, item) => {
    const price = parseFloat(item?.price);
    const quantity = parseInt(item?.quantity, 10);
    return total + price * quantity;
  }, 0);

  console.log(`Subtotal: $${subtotal.toFixed(2)}`);


  return (
    <>
      {/* Header */}
      <div className="flex justify-between shadow-xl items-center p-6">
        <h3 className="text-2xl font-bold dark:text-[#00D991] text-black">
          Rakibul Book Shop
        </h3>
        <ul className="flex items-center">
          <button
            onClick={() => setTheme(!theme)}
            className="p-3 border text-[#00D991] bg-green-200 rounded-md text-2xl border-[#00D991] ml-2"
          >
            <MdOutlineWbSunny />
          </button>
          <button
            onClick={() => setModel(true)}
            className="p-3 border text-[#00D991] bg-green-200 rounded-md text-2xl border-[#00D991] ml-2"
          >
            <TiShoppingCart />
          </button>
          <span className="relative bottom-5 w-[28px] h-[28px] rounded-full bg-green-800 text-white flex justify-center items-center">
            {cartItem.length}
          </span>
        </ul>
      </div>

      {/* Modal */}
      {model && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#171923] p-8 rounded-md w-[90%] max-h-screen overflow-y-auto relative">
            <h1 className="text-white text-center text-[32px] font-semibold">
              Your Carts
            </h1>
            <button
              onClick={() => setModel(false)}
              className="absolute top-3 right-3 text-3xl text-white hover:text-gray-700"
            >
              <AiOutlineClose />
            </button>
            <div className="grid grid-cols-12 gap-4 items-start mt-10">
              {/* Cart Items */}
              <div className="col-span-9">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-black">
                    <thead className="text-xs border-b-2 text-white uppercase bg-[#171923]">
                      <tr>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.length === 0 ? (
                        <tr>
                          <td
                            colSpan="5"
                            className="text-white text-center text-[20px] font-bold py-4"
                          >
                            No items in cart...
                          </td>
                        </tr>
                      ) : (
                        cartItem.map((item) => (
                          <MenuItems
                            key={item.id}
                            item={item}
                            onDelete={handleDelete}
                            onQuantityChange={handleQuantityChange}
                          />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-span-3">
                <div className="relative shadow-md sm:rounded-lg bg-gray-400">
                  <table className="w-full text-sm text-left text-white">
                    <caption className="p-5 text-lg font-semibold text-center border-b-2 border-[#BFBFBF]">
                      Order Summary
                    </caption>
                    <tbody>
                      <tr>
                        <th className="px-6 py-4 font-medium text-white">
                          Subtotal
                        </th>
                        <td className="px-6 py-4">${subtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <th className="px-6 py-4 font-medium text-white">
                          Shipping
                        </th>
                        <td className="px-6 py-4">Free</td>
                      </tr>
                      <tr>
                        <th className="px-6 py-4 font-medium text-white">
                          Total
                        </th>
                        <td className="px-6 py-4">${subtotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menue;
