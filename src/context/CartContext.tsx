import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { Product } from '../types';

export type CartItem = {
    product: Product;
    qty: number;
};

interface CartContextValue {
    items: CartItem[];
    addItem: (product: Product, qty?: number) => void;
    removeItem: (productId: string) => void;
    updateQty: (productId: string, qty: number) => void;
    clear: () => void;
    totalItems: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = useCallback((product: Product, qty = 1) => {
        setItems((prev) => {
            const found = prev.find((i) => i.product.id === product.id);
            if (found) {
                return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + qty } : i);
            }
            return [...prev, { product, qty }];
        });
    }, []);

    const removeItem = useCallback((productId: string) => {
        setItems((prev) => prev.filter((i) => i.product.id !== productId));
    }, []);

    const updateQty = useCallback((productId: string, qty: number) => {
        if (qty <= 0) {
            setItems((prev) => prev.filter((i) => i.product.id !== productId));
            return;
        }
        setItems((prev) => prev.map((i) => i.product.id === productId ? { ...i, qty } : i));
    }, []);

    const clear = useCallback(() => setItems([]), []);

    const totalItems = useMemo(() => items.reduce((s, it) => s + it.qty, 0), [items]);

    const value = useMemo(() => ({ items, addItem, removeItem, updateQty, clear, totalItems }), [items, addItem, removeItem, updateQty, clear, totalItems]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextValue => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};
