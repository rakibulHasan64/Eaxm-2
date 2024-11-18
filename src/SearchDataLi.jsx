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
          <strong>{name}</strong>
          <p>{author}</p>
          <p>{price}</p>
        </div>

      </li>

    </>
  );
}

export default SearchDataLi;