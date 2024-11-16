import { PiFireFill } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { WiSunrise } from "react-icons/wi";
import { useState, useContext } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { bookContext } from "./bookcondext";
import SearchDataLi from "./SearchDataLi";
import { initialBookData } from "./data/initialBookData"; 

function LeftSite() {
  const { taskitem, setTaskitem } = useContext(bookContext);

  const [searhModel, setSearhModel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const newhandler = () => {
    const filteredItems = initialBookData().filter(item => item.status === 'new_releases');
    setTaskitem(filteredItems);
  };

  const handlerCoon = () => {
    const filteredItems = initialBookData().filter(item => item.status === 'coming_soon');
    setTaskitem(filteredItems);
  };
  const handlerTanding = () => {
    const filteredItems = initialBookData().filter(item => item.trending === 'new_releases');
    setTaskitem(filteredItems);
  }

  const handlerSchasch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  let urdateData = taskitem?.filter(item => {
    return item.name?.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <section className="">
        <div className="mt-[78px]">
          <div className="">
            <div>
              <ul className="items-center dark:text-white text-black">
                <button onClick={() => setSearhModel(true)} className="flex justify-center items-center p-2 rounded-md border border-green-400  text-gray-400">
                  <span className="mr-[15px] text-xl"><IoSearch /></span>
                  <input className="outline-none text-gray-400 dark:bg-black " type="text" placeholder="Quick search..." />
                </button>
                <li className="flex justify-center items-center p-2 rounded-md text-center mt-[31px] hover:bg-green-700 text-black dark:text-white hover:text-black ">
                  <span className="mr-[21px] text-xl"><PiFireFill /></span>
                  <button onClick={handlerTanding} className="text-[18px]">Trending</button>
                </li>
                <li className="flex justify-center items-center p-2 rounded-md  mt-[31px] hover:bg-green-700 dark:text-white hover:text-black text-black">
                  <span className="mr-[15px] text-xl"><AiOutlineFolderAdd /></span>
                  <button onClick={newhandler} className="texr-[18px]">New Releases</button>
                </li>
                <li className="flex justify-center items-center p-2 rounded-md  mt-[31px] hover:bg-green-700 dark:text-white hover:text-black text-black">
                  <span className="mr-[15px] text-xl"><WiSunrise /></span>
                  <button onClick={handlerCoon} className="texr-[18px]">Coming Soon</button>
                </li>
                <li className="flex justify-center items-center p-2 rounded-md  mt-[31px] hover:bg-green-700 dark:text-white hover:text-black text-black">
                  <span className="mr-[15px] text-xl"><IoIosHeartEmpty /></span>
                  <span className="texr-[18px]">Favorites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {searhModel && (
        <div className="w-[1000px] h-[650px] fixed inset-0 bg-slate-800 mt-auto container my-auto mx-auto overflow-auto  rounded-md shadow-gray-900 justify-center box-s  bg-opacity-500 z-50">
          <div className="flex justify-between p-4 mt-[30px] mb-[55px]">
            <div className="flex justify-center items-center">
              <p className="pr-4"><GoSearch /></p>
              <input onChange={handlerSchasch} type="text" className="outline-none bg-slate-800  w-[300px]" placeholder="Type your favorite book name here ..." />
            </div>
            <button onClick={() => setSearhModel(false)} className="text-3xl"><RiCloseLargeLine /></button>
          </div>
          <div className="border-t-[1px]">
            <p className="text-center mx-auto mt-[66px] mb-[53px] text-[22px]">No item found</p>
          </div>

          <div className="">
            <ul>
              {urdateData.map((item, index) => (
                <SearchDataLi key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default LeftSite;
