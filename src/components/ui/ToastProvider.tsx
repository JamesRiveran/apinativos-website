import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Toast = { id: string; message: string; type?: 'success' | 'info' | 'error' };

interface ToastContextValue {
    toast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = useCallback((message: string, type: Toast['type'] = 'info') => {
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        setToasts((t) => [...t, { id, message, type }]);
        // auto remove after 3s
        setTimeout(() => {
            setToasts((t) => t.filter((x) => x.id !== id));
        }, 3000);
    }, []);

    const remove = (id: string) => setToasts((t) => t.filter((x) => x.id !== id));

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}

            <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3">
                <AnimatePresence>
                    {toasts.map((t) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            layout
                            className="w-80 max-w-full"
                        >
                            <div
                                role="status"
                                aria-live="polite"
                                className={`rounded-lg shadow-lg px-4 py-3 flex items-start gap-3 border ${t.type === 'success' ? 'bg-green-50 border-green-200' : t.type === 'error' ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'
                                    }`}
                            >
                                <div className="flex-1 text-sm text-gray-800">{t.message}</div>
                                <button aria-label="cerrar" onClick={() => remove(t.id)} className="text-gray-500">×</button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
};
