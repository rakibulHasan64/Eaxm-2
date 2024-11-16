/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";


function MenuItems({ item, onDelete, onQuantityChange }) {
  const { id, name, author, price, quantity, image } = item;

  const totalPrice = price * quantity;

  return (
    <tr className="bg-[#171923] border-b dark:bg-gray-800 dark:border-gray-700 text-white dark:hover:bg-gray-600">
      <th scope="row" className="py-4 font-medium whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-[65px] h-[84px]"
            src={image}
            alt={name}
          />
          <div className="ml-3">
            <span>{name || "No Name Available"}</span>
            <p>{author || "Unknown Author"}</p>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => onQuantityChange(id, quantity - 1)}
          disabled={quantity <= 1}
          className="px-2 py-1 text-xl bg-slate-400 rounded-l-md"
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          onClick={() => onQuantityChange(id, quantity + 1)}
          className="px-2 py-1 text-xl bg-slate-400 rounded-r-md"
        >
          +
        </button>
      </td>
      <td className="px-6 py-4">${totalPrice.toFixed(2)}</td>
      <td className="px-6 py-4 text-right">
        <button onClick={() => onDelete(id)} className="text-lg">
          <RiDeleteBin5Line />
        </button>
      </td>
    </tr>
  );
}

export default MenuItems;
