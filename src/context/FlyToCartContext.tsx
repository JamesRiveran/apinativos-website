// FlyToCartContext stub: animations removed per user request.
// Keep a compatible API so imports don't break elsewhere.
import React from 'react';

export const FlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

export const useFly = () => ({
    // no-op fly that immediately resolves
    fly: async () => { }
});
