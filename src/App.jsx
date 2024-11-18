import { useState } from "react"
import Contanier from "./Contanier"
import Fotter from "./Fotter"
import { initialBookData } from "./data/initialBookData"
import { bookContext } from "./bookcondext"

function App() {

  const [taskitem, setTaskitem] = useState(initialBookData());
  const [model, setModel] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);




  const handleLove = (item) => {
    setIsFavorite((prevFavorites) => {

      if (prevFavorites.find(fav => fav.id === item.id)) {
        return prevFavorites.filter(fav => fav.id !== item.id);
      }
      return [...prevFavorites, item];
    });
  };



  const handleAddToCart = (data) => {
    const newData = {
      id: data.id,
      name: data.name,
      author: data.author,
      image: data.image,
      price: data.price,
      quantity: 1,
    };

    const ifExit = cartItem.find(item => item.id === data.id);

    if (ifExit === undefined) {
      setCartItem([
        ...cartItem,
        newData
      ]);
    }



  }



  const providerValue = {
    taskitem,
    setTaskitem,
    cartItem,
    setCartItem,
    isFavorite,
    setIsFavorite


  }

  return (
    <bookContext.Provider value={providerValue}>
      <Contanier onlove={handleLove} onAdd={handleAddToCart} model={model} setModel={setModel} />
      <Fotter />

    </bookContext.Provider>


  )
}

export default App
