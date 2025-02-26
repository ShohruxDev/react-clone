import { createContext, useState, useContext } from "react";

const NewsContext = createContext();
const NewsProvider = ({ children }) => {
  const [wishlist, setwishlist] = useState(
    // localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []
  []);
  return (
    <NewsContext.Provider value={{ wishlist, setwishlist }}>
      {children}
    </NewsContext.Provider>
  );
};
export default NewsProvider;
export const useStateValue = () => {
  return useContext(NewsContext);
};  


