import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import type { Product } from '../types';

export type CartItem = {
    product: Product;
    qty: number;
};

interface CartMap {
    [businessId: string]: CartItem[];
}

interface CartContextValue {
    items: CartItem[]; // items for active business
    activeBusinessId: string | null;
    setActiveBusiness: (businessId: string | null) => void;
    addItem: (product: Product, qty?: number) => void;
    removeItem: (productId: string) => void;
    updateQty: (productId: string, qty: number) => void;
    clear: () => void; // clears active business cart
    clearForBusiness: (businessId: string) => void;
    totalItems: number;
}

const STORAGE_KEY = 'apinativos:carts_v1';
const STORAGE_ACTIVE_KEY = 'apinativos:activeBusiness_v1';

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [carts, setCarts] = useState<CartMap>({});
    const [activeBusinessId, setActiveBusinessId] = useState<string | null>(null);

    // load from localStorage once
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            if (parsed && typeof parsed === 'object') setCarts(parsed);
        } catch (e) {
            // ignore
        }
        try {
            const rawActive = localStorage.getItem(STORAGE_ACTIVE_KEY);
            if (rawActive) setActiveBusinessId(rawActive);
        } catch (e) { }
    }, []);

    // persist carts when changed
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(carts));
        } catch (e) { }
    }, [carts]);

    useEffect(() => {
        try {
            if (activeBusinessId) localStorage.setItem(STORAGE_ACTIVE_KEY, activeBusinessId);
            else localStorage.removeItem(STORAGE_ACTIVE_KEY);
        } catch (e) { }
    }, [activeBusinessId]);

    const getItemsFor = useCallback((businessId: string | null) => {
        if (!businessId) return [] as CartItem[];
        return carts[businessId] ?? [];
    }, [carts]);

    const items = useMemo(() => getItemsFor(activeBusinessId), [activeBusinessId, getItemsFor]);

    const addItem = useCallback((product: Product, qty = 1) => {
        if (!activeBusinessId) {
            console.warn('Adding item without active business set');
            return;
        }
        setCarts((prev) => {
            const prevFor = prev[activeBusinessId] ?? [];
            const found = prevFor.find((i) => i.product.id === product.id);
            let nextFor: CartItem[];
            if (found) {
                nextFor = prevFor.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + qty } : i);
            } else {
                nextFor = [...prevFor, { product, qty }];
            }
            return { ...prev, [activeBusinessId]: nextFor };
        });
    }, [activeBusinessId]);

    const removeItem = useCallback((productId: string) => {
        if (!activeBusinessId) return;
        setCarts((prev) => {
            const prevFor = prev[activeBusinessId] ?? [];
            const nextFor = prevFor.filter((i) => i.product.id !== productId);
            return { ...prev, [activeBusinessId]: nextFor };
        });
    }, [activeBusinessId]);

    const updateQty = useCallback((productId: string, qty: number) => {
        if (!activeBusinessId) return;
        setCarts((prev) => {
            const prevFor = prev[activeBusinessId] ?? [];
            let nextFor: CartItem[];
            if (qty <= 0) {
                nextFor = prevFor.filter((i) => i.product.id !== productId);
            } else {
                nextFor = prevFor.map((i) => i.product.id === productId ? { ...i, qty } : i);
            }
            return { ...prev, [activeBusinessId]: nextFor };
        });
    }, [activeBusinessId]);

    const clear = useCallback(() => {
        if (!activeBusinessId) return;
        setCarts((prev) => ({ ...prev, [activeBusinessId]: [] }));
    }, [activeBusinessId]);

    const clearForBusiness = useCallback((businessId: string) => {
        setCarts((prev) => ({ ...prev, [businessId]: [] }));
    }, []);

    const setActiveBusiness = useCallback((businessId: string | null) => {
        setActiveBusinessId((prev) => {
            // ensure an entry exists for businessId
            if (businessId) {
                setCarts((prevCarts) => ({ ...prevCarts, [businessId]: prevCarts[businessId] ?? [] }));
            }
            return businessId;
        });
    }, []);

    const totalItems = useMemo(() => items.reduce((s, it) => s + it.qty, 0), [items]);

    const value = useMemo(() => ({ items, activeBusinessId, setActiveBusiness, addItem, removeItem, updateQty, clear, clearForBusiness, totalItems }), [items, activeBusinessId, setActiveBusiness, addItem, removeItem, updateQty, clear, clearForBusiness, totalItems]);

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
