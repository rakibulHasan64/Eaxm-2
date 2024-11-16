/* eslint-disable react/prop-types */

// import ImageOne from "./assets/book_images/1.jpg"


function SearchDataLi({ item }) {

  const { name, author, price, image } = item || {};
  // console.log(image);


  return (
    <>

      <li className="flex gap-4 h-[92px]  hover:bg-[#00D991] p-3 pl-5 mt-[14px]">
        <img className="w-[60px] h-[60px]" src={image} alt="" />
        <div className="">
          <strong>{name || "No Name Available"}</strong>
          <p>{author || "Unknown Author"}</p>
          <p>{price || "No Name Available"}</p>
        </div>

      </li>

    </>
  );
}

export default SearchDataLi;