/* eslint-disable react/prop-types */

import LeftSite from "./LeftSite";
// import MedleAll from "./MedleAll";
import RightSite from "./RightSite";
import Medle from "./Medle";
import { useContext } from "react";
import { bookContext } from "./bookcondext";


function All({ onAdd }) {

  const { taskitem, setTaskitem } = useContext(bookContext);




  return (
    <>
      <div className="grid grid-cols-12 gap-3 text-white ">
        <div className="col-span-2 items-center">
          <LeftSite taskitem={taskitem} />
        </div>
        <div className="col-span-8 items-center">
          <div className="grid grid-cols-3 gap-7 mt-[78px] items-center p-6 border-x-2 border-[#595959]">
            {taskitem.map(items => (
              <Medle onAdd={onAdd} key={items.id} items={items} />))}
          </div>
        </div>
        <div className="col-span-2 items-center">
          <RightSite setTaskitem={setTaskitem} taskitem={taskitem} />
        </div>

      </div>


    </>
  );
}

export default All;


