// /* eslint-disable react/prop-types */
// import { TiShoppingCart } from "react-icons/ti";
// import { MdOutlineWbSunny } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";
// import MenuItems from "./MenuItems";
// import { useEffect, useState, useContext } from "react";
// import { bookContext } from "./bookcondext";

// function Menue({ model, setModel }) {
//   const { taskitem, setTaskitem } = useContext(bookContext);

//   const handlerDelete = (id) => {
//     setTaskitem(taskitem.filter(item => item.id !== id));
//   };

//   // থিম প্রিফারেন্স localStorage থেকে পড়া এবং ডিফল্ট থিম সেট করা
//   const [them, setThem] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   // থিম পরিবর্তন হলে localStorage-তে প্রিফারেন্স সেভ করা এবং থিম ক্লাস যোগ/অপসারণ করা
//   useEffect(() => {
//     if (them) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [them]);

//   return (
//     <>
//       <div className="flex justify-between shadow-xl items-center p-6">
//         <div>
//           <h3 className="text-2xl font-bold dark:text-[#00D991] text-black">DivineBook</h3>
//         </div>
//         <div>
//           <ul className="flex justify-center items-center">
//             <button onClick={() => setThem(!them)} className="p-3 border text-[#00D991] bg-green-200 rounded-md text-2xl border-[#00D991] ml-2">
//               <MdOutlineWbSunny />
//             </button>
//             <button
//               onClick={() => setModel(true)}
//               className="p-3 border text-[#00D991] bg-green-200 rounded-md text-2xl border-[#00D991] ml-2"
//             >
//               <TiShoppingCart />
//             </button>
//             <span className="relative bottom-5 w-[28px] h-[28px] rounded-full bg-green-800 text-white flex justify-center items-center"></span>
//           </ul>
//         </div>
//       </div>

//       {/* Modal */}
//       {model && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-[#171923] p-8 rounded-md w-[90%] max-h-screen overflow-y-auto relative">
//             <h1 className="text-white text-center text-[32px] font-semibold">Your Carts</h1>
//             <div className="mt-[40px]">
//               <button
//                 onClick={() => setModel(false)}
//                 className="absolute top-3 right-3 text-3xl text-white hover:text-gray-700"
//               >
//                 <AiOutlineClose />
//               </button>
//             </div>
//             <div className="grid grid-cols-12 gap-4 items-center">
//               <div className="col-span-9">
//                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                   <table className="w-full text-sm text-left text-gray-500 dark:text-black">
//                     <thead className="text-xs border-b-2 text-white uppercase bg-[#171923]">
//                       <tr>
//                         <th scope="col" className="px-6 py-3">Product</th>
//                         <th scope="col" className="px-6 py-3">Price</th>
//                         <th scope="col" className="px-6 py-3">Quantity</th>
//                         <th scope="col" className="px-6 py-3">Total</th>
//                         <th scope="col" className="px-6 py-3">
//                           <span className="sr-only">Edit</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {taskitem.map((item) => (
//                         <MenuItems onDelete={() => handlerDelete(item.id)} key={item.id} items={item} />
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="col-span-3">
//                 <div className="relative shadow-md sm:rounded-lg bg-gray-400">
//                   <table className="w-full text-sm text-left text-white">
//                     <caption className="p-5 text-lg font-semibold text-center border-b-2 border-[#BFBFBF]">
//                       Order Summary
//                     </caption>
//                     <thead className="text-xs uppercase">
//                       <tr>
//                         <th scope="col" className="px-6 py-3">Subtotal</th>
//                         <th scope="col" className="px-6 py-3">$300</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <th className="px-6 py-4 font-medium text-white">Shipping</th>
//                         <td className="px-6 py-4">Free</td>
//                       </tr>
//                       <tr>
//                         <th className="px-6 py-4 font-medium text-white">Total</th>
//                         <td className="px-6 py-4">$300</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Menue;

