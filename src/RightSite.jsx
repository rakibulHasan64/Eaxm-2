import { useContext } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { bookContext } from "./bookcondext";


function RightSite() {
  const { taskitem, setTaskitem } = useContext(bookContext);


  const handlerPrice = () => {
    const sortedItems = [...taskitem].sort((a, b) => a.price.localeCompare(b.price));
    setTaskitem(sortedItems);
  }


  const handlerRating = () => {
    const sortedItems = [...taskitem].sort((a, b) => b.rating.localeCompare(a.rating));
    setTaskitem(sortedItems);
  }

  const nameHandler = () => {
    const sortedItems = [...taskitem].sort((a, b) => a.name.localeCompare(b.name));
    setTaskitem(sortedItems);
    // console.log('Sorted by name');
  };



  return (
    <>
      <div className="mt-[78px]">
        <h3 className="text-2xl text-center text-black dark:text-white">Filter On Page</h3>
      </div>
      <div className="dark:text-white text-black ">
        <ul>
          <li className="flex justify-center items-center">
            <span className="text-xl"><BsChevronLeft /></span>
            <button onClick={nameHandler} className="text-xl">By name</button>
          </li>
          <li className="flex justify-center items-center">
            <span className="text-xl"><BsChevronLeft /></span>
            <button onClick={handlerRating} className="text-xl">By rating</button>
          </li>
          <li className="flex justify-center items-center">
            <span className="text-xl"><BsChevronLeft /></span>
            <button onClick={handlerPrice} className="text-xl">By price</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RightSite;
