/* eslint-disable react/prop-types */
import { useState } from 'react';

import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";

function Medle({ items, onAdd }) {
  const { image } = items;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to handle Add to cart
  const handleAddToCart = () => {
    onAdd(items);
    setShowPopup(false);
  };



  return (
    <>
      <section className="">
        <div className="border rounded-lg p-4 shadow-2xl">
          <img
            onClick={handlePopup}
            src={items.image}
            alt=""
            className="object-cover rounded cursor-pointer"
          />
          <h2 className="mt-4 text-xl text-black dark:text-white font-semibold">{items.name}</h2>
          <p className="mt-2 text-gray-600">{items.author}</p>
          <div className="mt-4">
            <span className="flex justify-start items-center font-bold text-2xl text-[#00D991]">
              {items.rating}
            </span>
          </div>
          <div className="flex justify-center items-center text-lg font-bold mt-4">
            <button
              onClick={handlePopup}
              className="ml-2 w-full bg-[#00D991] text-black px-4 py-2 rounded hover:bg-blue-600"
            >
              {items.price} <span>| Add to cart </span>
            </button>
            <span onClick={handleClick} className="ml-4 p-3 border rounded-md cursor-pointer text-2xl">
              <HiOutlineHeart className={`${isFavorite ? "bg-red-500" : "text-[#00D991]"}`} />
            </span>
          </div>
        </div>

        {/* Popup Section */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#1E293B] text-white p-6 rounded-lg shadow-lg w-[1203px] h-[445px] grid grid-cols-12 gap-4 justify-center items-center">
              <div className="col-span-8 lg:col-span-8">
                <h1 className="text-[48px] font-semibold">
                  Prenlter Prestion Pssquik
                </h1>
                <p className=' mt-[12px] text-[18px] font-semibold'>Comedy/Drama</p>
                <p className='mt-[34px] text-[15px] tracking-wide'>
                  When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through these journeys, readers are reminded of the importance of reaching out and finding support in others.
                </p>
                <div className="flex justify-center items-center w-[494px]">
                  {/* Add to cart button inside popup */}
                  <button onClick={handleAddToCart} className="w-full py-2 text-white bg-[#00D991] mt-[28px] rounded-sm">
                    {items.price} <span>| Add to cart</span>
                  </button>
                  <span className="ml-4 px-3 py-2 mt-5 mr-[39px] text-center border rounded-md text-[#00D991] text-2xl">
                    <MdFavoriteBorder />
                  </span>
                  <button
                    className="mt-4 mr-[31px]  bg-white text-black px-4 py-2 rounded"
                    onClick={handlePopup}>
                    Close
                  </button>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-4 flex justify-between items-center">
                <img
                  src={image}
                  alt=""
                  className="object-cover rounded w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Medle;
