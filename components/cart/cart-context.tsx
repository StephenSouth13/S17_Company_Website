"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  price: string
  originalPrice?: string | null // Đã sửa kiểu dữ liệu để chấp nhận null
  image: string
  quantity: number
  variant?: string
  inStock: boolean
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        return {
          ...state,
          items: updatedItems,
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          total: updatedItems.reduce(
            (sum, item) => sum + Number.parseInt(item.price.split('-')[0].replace(/,/g, "")) * item.quantity,
            0,
          ),
        }
      }

      const newItems = [...state.items, { ...action.payload, quantity: 1 }]
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        total: newItems.reduce((sum, item) => sum + Number.parseInt(item.price.split('-')[0].replace(/,/g, "")) * item.quantity, 0),
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        total: newItems.reduce((sum, item) => sum + Number.parseInt(item.price.split('-')[0].replace(/,/g, "")) * item.quantity, 0),
      }
    }

    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: action.payload.id })
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
      )
      return {
        ...state,
        items: updatedItems,
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        total: updatedItems.reduce(
          (sum, item) => sum + Number.parseInt(item.price.split('-')[0].replace(/,/g, "")) * item.quantity,
          0,
        ),
      }
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        itemCount: 0,
        total: 0,
      }

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
  itemCount: 0,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}