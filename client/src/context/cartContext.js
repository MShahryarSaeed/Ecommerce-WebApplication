import React,{createContext,useReducer} from 'react'

import { CartReducer } from './cartReducer';

export const CartContext=createContext();

const initialSatate={cartItems:[]};

const CartContextProvider=({children})=>{
    
    const [state,dispatch]=useReducer(CartReducer,initialSatate)

    const addProduct=payload=>{
        dispatch({type:'ADD',payload})
        // debugger;
    }

    const contextvalues={
        addProduct,
        ...state
    }
    return(
        <CartContext.Provider value={contextvalues}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider;