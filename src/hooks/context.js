import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('');
    
    return (
        <Context.Provider value={{showCart,setShowCart,isOpen, setIsOpen,query, setQuery}}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;
