   import { createContext, useState, useContext } from "react";
   
   const NewsContextt = createContext();
   const NewsProvider = ({ childrenn }) => {
     const [wishlistt, setwishlistt] = useState(
       // localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []
     []);
     return (
       <NewsContextt.Provider value={{ wishlistt, setwishlistt }}>
         {childrenn}
       </NewsContextt.Provider>
     );
   };
   export default NewsProvider;
   export const useStateValue = () => {
     return useContext(NewsContextt);
   };   
