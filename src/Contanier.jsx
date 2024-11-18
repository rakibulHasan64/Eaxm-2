
/* eslint-disable react/prop-types */

import All from "./All";
import Menue from "./Menue";





function Contanier({ model, setModel, onAdd, onlove }) {




  return (
    <>
      <div className="mt-9 dark:bg-black border-b-2">
        <div className="">
          <div className="container mx-auto">
            <Menue model={model} setModel={setModel} />
            <All onAdd={onAdd} onlove={onlove} />


          </div>
        </div>

      </div>

    </>
  );
}

export default Contanier;